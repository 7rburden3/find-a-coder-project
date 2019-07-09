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
                method: 'POST',
                body: JSON.stringify(newDeveloper),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .catch(err => {
                console.error(err)
            })
        
    }

    render() {

        return (
            <Fragment>
                <section class="page-section" id="add-dev-form">
                <NewDevForm handleDeveloperSubmit={this.handleDeveloperSubmit}/>
                </section>           
            </Fragment>
        )
    }

}

export default AddDevBox;
