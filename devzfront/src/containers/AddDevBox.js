import React, { Component, Fragment } from 'react';
import NewDevForm from '../components/NewDevForm'

class AddDevBox extends Component {
    constructor(props) {
        super(props);
        this.handleDeveloperSubmit = this.handleDeveloperSubmit.bind(this);
    }

    handleDeveloperSubmit(newDeveloper) {
        console.log(newDeveloper);
        
    }

    render() {

        return (
            <Fragment>
                <h1>DEVZ! Add!</h1>
                <NewDevForm handleDeveloperSubmit={this.handleDeveloperSubmit}/>
            </Fragment>
        )
    }

}

export default AddDevBox;
