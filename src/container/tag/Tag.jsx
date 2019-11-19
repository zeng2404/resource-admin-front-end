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

import {blue} from "@material-ui/core/colors";

import {
    Add,
} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";

import ValidationTextField from "../../component/TextField/ValidationTextField.jsx";
import StateButton from "../hooks/button";
import Context from '../hooks/context'

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
    return {}
}

// function
const mapDispatchToProps = dispatch => {
    return {}
}



class Tag extends Component {
    render() {

        const {
            classes,
        } = this.props;

        return (
            <div>
                <Dialog open={false}>
                    <DialogTitle>
                        <FormattedMessage id={"intl_tag_add_dialog_title"}>
                        </FormattedMessage>
                    </DialogTitle>
                            <form onSubmit={
                                event =>{
                                    event.preventDefault();
                                }
                            }>
                                <DialogContent>
                                <ValidationTextField
                                    id={"tagName"}
                                    label={
                                        <FormattedMessage id={"intl_tag_name_label"}>
                                        </FormattedMessage>
                                    }
                                    fullWidth
                                    required
                                    name={"tagName"}
                                    className={classes.textField}
                                    margin={"normal"}
                                    variant={"outlined"}
                                    error
                                    helperText={"helper text"}
                                    />
                                <ValidationTextField
                                    id={"tagDescription"}
                                    label={
                                        <FormattedMessage id={"intl_tag_description_label"}>
                                        </FormattedMessage>
                                    }
                                    fullWidth
                                    helperText={"helper text"}
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
                                    <Button onClick={() =>{}} color="secondary"
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
                <Typography variant={'h5'}>
                    <FormattedMessage id={"intl_tag_container_title"}>
                    </FormattedMessage>
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <h1>First</h1>
                    </Grid>
                    <Grid item>
                        {/*<StateButton/>*/}
                        <Context/>
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
                                    alert('test')
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
