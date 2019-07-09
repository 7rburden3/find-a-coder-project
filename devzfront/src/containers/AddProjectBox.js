import React, {Component, Fragment} from 'react'
import NewProjectForm from '../components/NewProjectForm';
import ProjectList from '../components/ProjectList';

class AddProjectBox extends Component {
    constructor(props) {
        super(props);
        this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
    }

    handleProjectSubmit(newProject) {
        console.log(newProject);
        fetch('http://localhost:8080/projects',
            {
                method: 'POST',
                body: JSON.stringify(newProject),
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
                <section class="page-section" id="add-project-form">
                    <NewProjectForm handleProjectSubmit={this.handleProjectSubmit} />
                </section>           
            </Fragment>
        )
    }

}

export default AddProjectBox;