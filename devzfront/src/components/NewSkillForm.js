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
        this.props.handleSkillSubmit({
            skill: this.state.skill
        })
    }




    render() {
        return (
            <div className ="row">
                <div className= "col-md-6">
                    <form className="form-inline " onSubmit={this.handleSubmit}>
                        <label form="skill">Skill</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="skill"
                            placeholder="Skill"
                            value={this.state.skill}
                            onChange={this.handleSkillChange}
                        />
                        <input type="submit" value="Submit" />
            </form>
            </div>
            </div>
        )
    }
}




export default NewSkillForm
