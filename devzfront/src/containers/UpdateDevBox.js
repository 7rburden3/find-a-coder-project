import React, { Component, Fragment } from 'react';
import UpdateDevForm from '../components/UpdateDevFrom'

class UpdateDevBox extends Component {
    constructor(props) {
        super(props);

        
        this.handleDeveloperUpdate = this.handleDeveloperUpdate.bind(this);
    }

    handleDeveloperUpdate(developerChanges) {
        console.log(developerChanges);
        let id = developerChanges.id
        fetch(`http://localhost:8080/developers/${id}`,
            {
                method: 'UPDATE',
                body: JSON.stringify(developerChanges),
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
                   <h1>Hello</h1>
                </section>
            </Fragment>
        )
    }

}

export default UpdateDevBox;
