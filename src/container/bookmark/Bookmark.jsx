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

// css
const styles = theme => ({})

//state
const mapStateToProps = state => {
    return {}
}

// function
const mapDispatchToProps = dispatch => {
    return {}
}

class Bookmark extends Component {
    render() {
        return (
            <div>
                <Typography variant={'h5'}>
                    <FormattedMessage id={"intl_bookmark_container_title"}>
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
                        <h1>Second</h1>
                    </Grid>
                    <Grid item>
                        <h1>Third</h1>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Bookmark.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Bookmark));
