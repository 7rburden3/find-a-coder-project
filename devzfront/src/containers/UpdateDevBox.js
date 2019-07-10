import React, { Component, Fragment } from 'react';
import UpdateDevForm from '../components/UpdateDevFrom'

class UpdateDevBox extends Component {
    constructor(props) {
        super(props);

        
        this.handleDeveloperUpdate = this.handleDeveloperUpdate.bind(this);
    }

    handleDeveloperUpdate(id, developerChanges) {
        console.log('Shooes',id, developerChanges)
        fetch(`http://localhost:8080/developers/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(developerChanges),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                window.location = '/'
            })
    }

    render() {

        return (
            <Fragment>
                <section class="page-section" id="add-dev-form">
                    <UpdateDevForm 
                    handleDeveloperUpdate={this.handleDeveloperUpdate}
                    profileDetails = {this.props.profileDetails} 
                    />
                </section>
            </Fragment>
        )
    }

}

export default UpdateDevBox;
