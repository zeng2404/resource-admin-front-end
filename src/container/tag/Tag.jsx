import React, {Component} from 'react'
import {
    Grid,
    Chip,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    FormGroup,
    FormControlLabel,
    Snackbar,
    Tooltip,
    Fab,
    Switch,
    Typography,
    TablePagination,
    FormControl,
    Select,
    InputLabel,
    OutlinedInput,
    MenuItem,
} from '@material-ui/core';
import {
    SelectionState,
    IntegratedSelection,
    DataTypeProvider
} from '@devexpress/dx-react-grid';
import {
    Grid as TableGrid,
    Table,
    TableHeaderRow,
    TableFixedColumns,
    TableSelection,
    TableColumnResizing,
} from '@devexpress/dx-react-grid-material-ui';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";

import {blue} from "@material-ui/core/colors";

import {
    Add,
} from '@material-ui/icons';
import {
    changeTagSaveDialogVisibility,
    submitTagSaveForm,
} from '../../action/tagAction'
// css
const styles = theme => ({
    addButton: {
        marginRight: 60,
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    },
    textField: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%'
    },
    dialogAction: {
        marginBottom: 10,
    }
})

//state
const mapStateToProps = state => {
    return {
        tagSaveDialogVisibility: state.tagReducer.tagSaveDialogVisibility,
        tagSaveDialogErrorArray: state.tagReducer.tagSaveDialogErrorArray,
    }
}

// function
const mapDispatchToProps = dispatch => {
    return {
        changeTagSaveDialogVisibility: visibilityBool => dispatch(changeTagSaveDialogVisibility(visibilityBool)),
        submitTagSaveForm: tagObjcet => dispatch(submitTagSaveForm(tagObjcet)),
    }
}

class Tag extends Component {
    render() {
        const {
            classes,
            tagSaveDialogVisibility,
            tagSaveDialogErrorArray,
        } = this.props;

        const {
            changeTagSaveDialogVisibility,
            submitTagSaveForm,
        } = this.props;
        return (
            <div>
                <Typography variant={'h5'}>
                    <FormattedMessage id={"intl_tag_container_title"}>
                    </FormattedMessage>
                </Typography>
                <Dialog open={tagSaveDialogVisibility}>
                    <DialogTitle>
                        <FormattedMessage id={"intl_tag_add_dialog_title"}>
                        </FormattedMessage>
                    </DialogTitle>
                    <form onSubmit={
                        event => {
                            event.preventDefault();
                            submitTagSaveForm({
                                tagName: event.target.tagName.value,
                                tagDescription: event.target.tagDescription.value,
                            })
                        }
                    }>
                        <DialogContent>
                            <TextField
                                id={"tagName"}
                                label={
                                    <FormattedMessage id={"intl_tag_name_label"}>
                                    </FormattedMessage>
                                }
                                error={tagSaveDialogErrorArray.indexOf("tagName") !== -1}
                                helperText={
                                    tagSaveDialogErrorArray.indexOf("tagName") !== -1 ?
                                        <FormattedMessage id={"intl_tag_name_validate_error_tip"}>
                                        </FormattedMessage>
                                        : ""
                                }
                                fullWidth
                                name={"tagName"}
                                className={classes.textField}
                                margin={"normal"}
                                variant={"outlined"}
                            />
                            <TextField
                                id={"tagDescription"}
                                label={
                                    <FormattedMessage id={"intl_tag_description_label"}>
                                    </FormattedMessage>
                                }
                                fullWidth
                                name={"tagDescription"}
                                className={classes.textField}
                                margin={"normal"}
                                variant={"outlined"}
                            />
                        </DialogContent>
                        <DialogActions className={classes.dialogAction}>
                            <Button type={'reset'} color="default" variant="contained">
                                <FormattedMessage id={"intl_reset_button_value"}>
                                </FormattedMessage>
                            </Button>
                            <Button onClick={() => {
                                changeTagSaveDialogVisibility(false);
                            }} color="secondary"
                                    variant="contained">
                                <FormattedMessage id={"intl_cancel_button_value"}>
                                </FormattedMessage>
                            </Button>
                            <Button type={'submit'} color="primary" variant="contained">
                                <FormattedMessage id={"intl_submit_button_value"}>
                                </FormattedMessage>
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <Tooltip title=
                                     {
                                         <FormattedMessage id={"intl_add_button"}>
                                         </FormattedMessage>
                                     }
                        >
                            <Fab size="small" aria-label="Add" className={classes.addButton}>
                                <Add onClick={() => {
                                    changeTagSaveDialogVisibility(true);
                                }}/>
                            </Fab>
                        </Tooltip>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Tag.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Tag));
