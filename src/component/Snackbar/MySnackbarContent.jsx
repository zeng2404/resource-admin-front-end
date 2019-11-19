import React, {Component} from "react";
import {CheckCircle, Warning, Error, Info, Close,} from "@material-ui/icons";
import {amber, teal} from '@material-ui/core/colors';
import {IconButton} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import clsx from 'clsx';

const variantIcon = {
    success: CheckCircle,
    info: Info,
    error: Error,
    warning: Warning
}

const styles = theme => ({
    success: {
        backgroundColor: teal[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.8,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
})

class MySnackbarContent extends Component {
    render() {
        const {classes, infoLevel, message, onClose, className} = this.props;
        const Icon = variantIcon[infoLevel];
        return (
            <SnackbarContent
                className={clsx(classes[infoLevel], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={clsx(classes.icon, classes.iconVariant)}/>
                        {message}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                        <Close className={classes.icon} />
                    </IconButton>,
                ]}
            >
            </SnackbarContent>
        )
    }
}

MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MySnackbarContent);


