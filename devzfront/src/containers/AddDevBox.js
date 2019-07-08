import React, { Component, Fragment } from 'react';
import NewDevForm from '../components/NewDevForm'

class AddDevBox extends Component {
    constructor(props) {
        super(props);
        this.handleDeveloperSubmit = this.handleDeveloperSubmit.bind(this);
    }

    handleDeveloperSubmit(newDeveloper) {
        console.log(newDeveloper);
        fetch('http://localhost:8080/developers',
            {
                method: 'POST', body: JSON.stringify(newDeveloper),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            // .then(res => res.json())
            // .then(returnData => 
        
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
