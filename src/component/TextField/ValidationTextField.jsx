import React, { Component } from 'react'
import { TextField } from "@material-ui/core";

class ValidationTextField extends Component {

    render() {
        return(
            <TextField
                {...this.props}
                validation={'shit'}
                onChange={event => console.log(event.target.value)}
            />
        )
    }
}

export default ValidationTextField;
