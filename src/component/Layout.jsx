import React, {Component} from "react";
import clsx from 'clsx';
import {
    AppBar,
    Toolbar,
    Tooltip,
    IconButton,
    Button,
    Popper,
    MenuList,
    Paper,
    MenuItem,
    ListItemText,
    Grid,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon
} from "@material-ui/core";
import { HashRouter ,Link } from 'react-router-dom'

import {Translate, Menu, ChevronLeft, Bookmark, Label} from "@material-ui/icons";
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";

import {
    openLocaleChooseMenu,
    closeLocaleChooseMenu,
    changeLocaleChooseIndex,
    changeLeftDrawerOpenStatus,
} from "../action/globalAction";

const drawerWidth = 200;

// css
const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundImage: 'linear-gradient(-90deg, #29bdd9 0%, #276ace 100%)',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    localeButton: {
        color: 'white',
        width: 150,
    },
    buttonLeftIcon: {
        marginRight: theme.spacing(1),
    },
    localeChoosePopper: {
        zIndex: 2000,
    },
    drawerButton: {
        color: 'white',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(5) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        height: 64,
    },
    listItem : {
        textDecoration : 'none',
    },
    listItemText: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontWeight: 'bold',

    }
})

// state
const mapStateToProps = state => {
    return {
        currentLocaleChooseIndex: state.globalReducer.currentLocaleChooseIndex,
        localeDescriptionList: state.globalReducer.localeDescriptionList,
        localeChooseMenuVisibility: state.globalReducer.localeChooseMenuVisibility,
        localeChooseMenuAnchorEl: state.globalReducer.localeChooseMenuAnchorEl,
        leftDrawerOpenBool: state.globalReducer.leftDrawerOpenBool,
    }
}

// function
const mapDispatchToProps = dispatch => {
    return {
        openLocaleChooseMenu: anchorEl => dispatch(openLocaleChooseMenu(anchorEl)),
        closeLocaleChooseMenu: () => dispatch(closeLocaleChooseMenu()),
        changeLocaleChooseIndex: index => dispatch(changeLocaleChooseIndex(index)),
        changeLeftDrawerOpenStatus: openBool => dispatch(changeLeftDrawerOpenStatus(openBool)),
    }
}

class Layout extends Component {
    componentDidMount() {
    }

    render() {
        // state
        const {
            classes,
            currentLocaleChooseIndex,
            localeDescriptionList,
            localeChooseMenuVisibility,
            localeChooseMenuAnchorEl,
            leftDrawerOpenBool
        } = this.props;

        // function
        const {
            openLocaleChooseMenu,
            closeLocaleChooseMenu,
            changeLocaleChooseIndex,
            changeLeftDrawerOpenStatus,
        } = this.props;

        return (
            <div>
                <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: leftDrawerOpenBool
                    })}
                >
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Tooltip placement={"bottom"} title={
                                    <FormattedMessage id={"intl_drawer_button_tip"}>
                                    </FormattedMessage>
                                }>
                                    <IconButton className={clsx(classes.drawerButton, {
                                        [classes.hide]: leftDrawerOpenBool,
                                    })}
                                        onClick={() => changeLeftDrawerOpenStatus(true)}
                                    >
                                        <Menu/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                            </Grid>
                            <Grid item>
                                <div
                                    onMouseOver={event => openLocaleChooseMenu(event.currentTarget)}
                                    onMouseLeave={() => closeLocaleChooseMenu()}
                                >
                                    <Button className={classes.localeButton}>
                                        <Translate className={classes.buttonLeftIcon}/>
                                        {localeDescriptionList[currentLocaleChooseIndex]}
                                    </Button>
                                    <Popper open={localeChooseMenuVisibility} anchorEl={localeChooseMenuAnchorEl}
                                            placement={'bottom'} className={classes.localeChoosePopper}>
                                        <Paper>
                                            <MenuList>
                                                {
                                                    localeDescriptionList.map((value, index) => {
                                                        return (
                                                            <MenuItem key={'locale-' + index}
                                                                      onClick={() => changeLocaleChooseIndex(index)}>
                                                                <ListItemText>{value}</ListItemText>
                                                            </MenuItem>
                                                        )
                                                    })
                                                }
                                            </MenuList>
                                        </Paper>
                                    </Popper>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant={"permanent"}
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: leftDrawerOpenBool,
                        [classes.drawerClose]: !leftDrawerOpenBool,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: leftDrawerOpenBool,
                            [classes.drawerClose]: !leftDrawerOpenBool,
                        })
                    }}
                    open={leftDrawerOpenBool}
                >
                    <div className={classes.toolbar}>
                        <IconButton>
                            {
                                leftDrawerOpenBool ?
                                    <ChevronLeft
                                        onClick={() => changeLeftDrawerOpenStatus(false)}
                                    />
                                    :
                                    <div></div>
                            }
                        </IconButton>
                    </div>
                    <Divider/>
                    <HashRouter>
                    <List>
                        <Link to={'/bookmark'} className={classes.listItem}>
                        <ListItem button key={'left-drawer-bookmark'} >
                            <ListItemIcon>
                                <Bookmark/>
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                <FormattedMessage id={"intl_left_drawer_bookmark"}>
                                </FormattedMessage>
                            </ListItemText>
                        </ListItem>
                        </Link>
                        <Link to={'/tag'} className={classes.listItem}>
                            <ListItem button key={'left-drawer-tag'} >
                                <ListItemIcon>
                                    <Label/>
                                </ListItemIcon>
                                <ListItemText className={classes.listItemText}>
                                    <FormattedMessage id={"intl_left_drawer_tag"}>
                                    </FormattedMessage>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                    </HashRouter>
                </Drawer>
            </div>
        )
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));