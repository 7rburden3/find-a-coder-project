import React, {Component} from 'react'

class NewSkillForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skill: ''
        }
        this.handleSkillChange = this.handleSkillChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSkillChange(event) {
        this.setState({ skill: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
    }




    render() {
        return (
            <form className="skill-form" onSubmit={this.handleSubmit}>
                <label form="skill">Skill</label>
                <input type="text"
                    id="skill"
                    placeholder="Skill"
                    value={this.state.skill}
                    onChange={this.handleSkillChange}
                />
                <input type="submit" value="Submit" />
            </form>
        )
        console.log('here new skill')
    }
}




export default NewSkillForm
