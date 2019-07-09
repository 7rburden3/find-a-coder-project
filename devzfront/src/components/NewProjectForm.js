import React, {Component} from 'react'

class NewProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projectName: ''
        }
        this.handleProjectChange = this.handleProjectChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleProjectChange(event) {
        this.setState({ projectName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.handleProjectSubmit({
            projectName: this.state.projectName
        })
    }




    render() {
        return (
            <form className="project-form" onSubmit={this.handleSubmit}>
                <label for="projectName">Project</label>
                <input type="text"
                    id="projectName"
                    placeholder="Project"
                    value={this.state.projectName}
                    onChange={this.handleProjectChange}
                />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}



    
export default NewProjectForm