import React, {Component} from 'react'

class NewDevForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            github: '',
            email: '',
            experience: '',
            dailyRate: '',
            picture: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleGithubChange = this.handleGithubChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleDailyRateChange = this.handleDailyRateChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleGithubChange(event) {
        this.setState({ github: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleExperienceChange(event) {
        this.setState({ experience: event.target.value });
    }

    handleDailyRateChange(event) {
        this.setState({ dailyRate: event.target.value });
    }

    handlePictureChange(event) {
        this.setState({ picture: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()        
        this.props.handleDeveloperSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
            github: this.state.github,
            email: this.state.email,
            experience: this.state.experience,
            dailyRate: this.state.dailyRate,
            picture: this.state.picture
        })
    }


    render() {
        return (
            <form className="developer-form" onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                />
            
                <input type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                />    
                <input type="text"
                    placeholder="Location"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                />    
                <input type="text"
                    placeholder="github"
                    value={this.state.github}
                    onChange={this.handleGithubChange}
                />    
                <input type="text"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />    
                <input type="text"
                    placeholder="Experience"
                    value={this.state.experience}
                    onChange={this.handleExperienceChange}
                />    
                <input type="number"
                    placeholder="Daily Rate"
                    value={this.state.dailyRate}
                    onChange={this.handleDailyRateChange}
                />    
                <input type="text"
                    placeholder="Picture"
                    value={this.state.picture}
                    onChange={this.handlePictureChange}
                />    
                <input type="submit" value="Submit"/>
           </form>
        )
    }
   
}

export default NewDevForm