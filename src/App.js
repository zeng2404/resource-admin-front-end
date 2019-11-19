import React, {Component} from 'react';
import {
    Paper,
    Snackbar,
} from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import {withStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {snackbarAutoHiddenTime} from "./config/config";
import  MySnackbarContent  from "./component/Snackbar/MySnackbarContent.jsx";

// react 国际化
import {FormattedMessage, IntlProvider} from 'react-intl'
import zh_CN from "./locale/zh_CN";
import en_US from "./locale/en_US";

import routes from "./route";
import {Redirect, Route, Switch, HashRouter} from 'react-router-dom';

// function
import {
    changeSnackbarVisibilityStatus,
} from './action/globalAction'
import Layout from "./component/Layout.jsx";

// css
const styles = theme => ({
    secondButton: {
        marginRight: theme.spacing(2),
        color: "white",
    },
    rootBox: {
        backgroundColor: 'rgba(67, 90, 111, 0.3)',
        fontFamily: "\"fira-code\",\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    },
    contentBox: {
        flexGrow: 1,
        padding: theme.spacing(2),
        // marginLeft: 58,
        marginTop: 64,
        marginRight: 2,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    content: {
        padding: 20,
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
})

// state
const mapStateToProps = state => {
    return {
        currentLocaleChooseIndex: state.globalReducer.currentLocaleChooseIndex,
        localeList: state.globalReducer.localeList,
        leftDrawerOpenBool: state.globalReducer.leftDrawerOpenBool,
        snackbarVisibility: state.globalReducer.snackbarVisibility,
        snackbarInfoLevel: state.globalReducer.snackbarInfoLevel,
        snackbarMessageIntlId: state.globalReducer.snackbarMessageIntlId,
    }
}

// function
const mapDispatchToProps = dispatch => {
    return {
        changeSnackbarVisibilityStatus: openBool => dispatch(changeSnackbarVisibilityStatus(openBool)),

    }
}

class App extends Component {


    componentDidMount() {

    }

    render() {
        const getLocale = language => {
            switch (language.split('-')[0]) {
                case 'en':
                    return en_US;
                    break;
                case 'zh':
                    return zh_CN;
                    break;
                default:
                    return en_US;
                    break;
            }
        }

        // state
        const {
            classes,
            currentLocaleChooseIndex,
            localeList,
            leftDrawerOpenBool,
            snackbarVisibility,
            snackbarInfoLevel,
            snackbarMessageIntlId,
        } = this.props;

        // function
        const {
            changeSnackbarVisibilityStatus,
        } = this.props;

        return (
            <div className={classes.rootBox}>
                <IntlProvider locale={localeList[currentLocaleChooseIndex]} messages={getLocale(localeList[currentLocaleChooseIndex])}>
                    <Layout/>
                    <div className={classes.contentBox} style={{marginLeft: leftDrawerOpenBool ? 210 : 58}}>
                        <Paper className={classes.content}>
                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                autoHideDuration={snackbarAutoHiddenTime}
                                open={snackbarVisibility}
                                onClose={() => changeSnackbarVisibilityStatus(false)}
                                ContentProps={{
                                    'aria-describedby': 'message-id',
                                }}
                            >
                                <MySnackbarContent
                                    infoLevel={snackbarInfoLevel}
                                    message={
                                        <FormattedMessage id={snackbarMessageIntlId}>
                                        </FormattedMessage>
                                    }
                                    onClose={() => changeSnackbarVisibilityStatus(false)}
                                />
                            </Snackbar>
                            <HashRouter>
                                <Switch>
                                    {
                                        routes.map((route, index) => (
                                            <Route exact path={route.path} component={route.component} key={route.key}/>
                                        ))
                                    }
                                    <Redirect from="/" to="/bookmark"/>
                                </Switch>
                            </HashRouter>
                        </Paper>
                    </div>
                </IntlProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
