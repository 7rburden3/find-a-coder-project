import React, { Component } from 'react'

class UpdateDevForm extends Component {

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
        const id = this.props.profileDetails.id
        this.props.handleDeveloperUpdate(
            id, 
            {
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
        const developer = this.props.profileDetails


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Add a new developer</h1>
                        <form className="developer-form" onSubmit={this.handleSubmit}>
                            <div class="row">
                                <div class="col-md">
                                    <div class="form-group">
                                        <label for="first-name">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first-name"
                                            placeholder={developer.firstName}
                                            value={this.state.firstName}
                                            onChange={this.handleFirstNameChange}
                                        />

                                        <label for="last-name">Last Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="last-name"
                                            placeholder= {developer.lastName}
                                            label="Second Name"
                                            value={this.state.lastName}
                                            onChange={this.handleLastNameChange}
                                        />
                                        <label for="location">Location</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="location"
                                            placeholder={developer.location}
                                            label="Location"
                                            value={this.state.location}
                                            onChange={this.handleLocationChange}
                                        />
                                        <label for="github">github</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="github"
                                            placeholder={developer.github}
                                            label="github"
                                            value={this.state.github}
                                            onChange={this.handleGithubChange}
                                        />
                                        <label for="email">email</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="email"
                                            placeholder={developer.email}
                                            label="email"
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                        <label for="experience">Experience</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="experience"
                                            placeholder={developer.experience}
                                            label="Experience"
                                            value={this.state.experience}
                                            onChange={this.handleExperienceChange}
                                        />
                                        <label for="daily-rate">Daily Rate</label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="daily-rate"
                                            placeholder={developer.dailyRate}
                                            label="Daily Rate"
                                            value={this.state.dailyRate}
                                            onChange={this.handleDailyRateChange}
                                        />
                                        <label for="picture">Picture</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="picture"
                                            placeholder={developer.picture}
                                            label="Picture"
                                            value={this.state.picture}
                                            onChange={this.handlePictureChange}
                                        />
                                        <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}




export default UpdateDevForm