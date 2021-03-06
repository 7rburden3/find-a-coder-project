import React, { Component, Fragment } from 'react';
import UpdateDevForm from '../components/UpdateDevFrom'

class UpdateDevBox extends Component {
    constructor(props) {
        super(props);
        console.log("AAAAAAA",props);
        
        this.addSkill = this.addSkill.bind(this)
        this.addProject = this.addProject.bind(this)
        this.handleDeveloperUpdate = this.handleDeveloperUpdate.bind(this);
    }

    handleDeveloperUpdate(id, developerChanges) {
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

    addSkill(skillId, id) {
        fetch(`http://localhost:8080/developers/${id}/skills`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/uri-list'
                },
                body: `http://localhost:8080/skills/${skillId}`
            })
            .catch(err => {
                console.error(err)
            });
      }

      addProject(projectId, id) {
        fetch(`http://localhost:8080/developers/${id}/projects`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/uri-list'
                },
                body: `http://localhost:8080/projects/${projectId}`
            })
            .catch(err => {
                console.error(err)
            });
      }

    render() {

        return (
            <Fragment>
                <section class="page-section" id="add-dev-form">
                    <UpdateDevForm 
                    handleDeveloperUpdate={this.handleDeveloperUpdate}
                    profileDetails = {this.props.profileDetails}
                    allSkills = {this.props.allSkills}
                    allProjects={this.props.allProjects}
                        onSkillAdd={this.addSkill}
                        onProjectAdd={this.addProject}
                    />
                </section>
            </Fragment>
        )
    }

    
}

export default UpdateDevBox;
