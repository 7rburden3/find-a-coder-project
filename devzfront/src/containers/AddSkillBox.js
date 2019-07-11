import React, { Component, Fragment } from 'react';
import NewSkillForm from '../components/NewSkillForm'

class AddSkillBox extends Component {
    constructor(props) {
        super(props);
        this.handleSkillSubmit = this.handleSkillSubmit.bind(this);
    }

    handleSkillSubmit(newSkill) {
        console.log(newSkill);
        fetch('http://localhost:8080/skills',
            {
                method: 'POST',
                body: JSON.stringify(newSkill),
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
                <div className = "container">
                    
                <h1>Add skills</h1>
                    <div className="row">
                     <NewSkillForm handleSkillSubmit={this.handleSkillSubmit}/>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default AddSkillBox;
