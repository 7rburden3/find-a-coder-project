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
                                        className= "form-control"
                                        id="first-name"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleFirstNameChange}
                                    />
                                
                                <label for="last-name">Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="last-name"
                                        placeholder="Last Name"
                                        label="Second Name"
                                        value={this.state.lastName}
                                        onChange={this.handleLastNameChange}
                                    />    
                                <label for="location">Location</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="location"
                                        placeholder="Location"
                                        label="Location"
                                        value={this.state.location}
                                        onChange={this.handleLocationChange}
                                    />    
                                <label for="github">github</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="github"
                                        placeholder="github"
                                        label="github"
                                        value={this.state.github}
                                        onChange={this.handleGithubChange}
                                    />    
                                <label for="email">email</label>
                                <input 
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        placeholder="email"
                                        label="email"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />    
                                <label for="experience">Experience</label>
                                <input 
                                        className="form-control"
                                        type="text"
                                        id="experience"
                                        placeholder="Experience"
                                        label="Experience"
                                        value={this.state.experience}
                                        onChange={this.handleExperienceChange}
                                    />    
                                <label for="daily-rate">Daily Rate</label>
                                <input 
                                        className="form-control"
                                        type="number"
                                            id="daily-rate"
                                            placeholder="Daily Rate"
                                        label="Daily Rate"
                                        value={this.state.dailyRate}
                                        onChange={this.handleDailyRateChange}
                                    />    
                                <label for="picture">Picture</label>
                                <input 
                                        className="form-control"
                                        type="text"
                                        id="picture"
                                        placeholder="Picture"
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



//    
//         <h2 className="section-heading text-uppercase">Contact Me</h2>
//         <h3 className="section-subheading text-muted">If you'd like to work with me or ask a question. </h3>
//     </div>
// </div>
//     <div className="row">
//         <div className="col-lg-12">
//             <form id="contactForm" name="sentMessage" novalidate="novalidate">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
//                                 <p className="help-block text-danger"></p>
//                 </div>
//                             <div className="form-group">
//                                 <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
//                                     <p className="help-block text-danger"></p>
//                 </div>
//                                 <div className="form-group">
//                                     <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
//                                         <p className="help-block text-danger"></p>
//                 </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="form-group">
//                                         <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
//                                         <p className="help-block text-danger"></p>
//                                     </div>
//                                 </div>
//                                 <div className="clearfix"></div>
//                                 <div className="col-lg-12 text-center">
//                                     <div id="success"></div>
//                                     <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
//                                 </div>
//                             </div>
//           </form>
//                     </div>
//                 </div>
//     </div>
export default NewDevForm