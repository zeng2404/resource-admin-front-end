import React, {Component} from 'react';
import {
    Paper,

} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

// react 国际化
import {IntlProvider} from 'react-intl'
import zh_CN from "./locale/zh_CN";
import en_US from "./locale/en_US";

// function
import {
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
        padding: 16,
    }
})

// state
const mapStateToProps = state => {
    return {
        currentLocaleChooseIndex: state.globalReducer.currentLocaleChooseIndex,
        localeList: state.globalReducer.localeList,
        leftDrawerOpenBool: state.globalReducer.leftDrawerOpenBool,
    }
}

// function
const mapDispatchToProps = dispatch => {
    return {
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
        } = this.props;

        // function
        const {
        } = this.props;

        return (
            <div className={classes.rootBox}>
                <IntlProvider locale={localeList[currentLocaleChooseIndex]} messages={getLocale(localeList[currentLocaleChooseIndex])}>
                    <Layout/>
                    <div className={classes.contentBox} style={{marginLeft: leftDrawerOpenBool ? 210 : 58}}>
                        <Paper className={classes.content}>

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
