import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class ProfileDetail extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        console.log(this.props.profileDetails)
        let developer = this.props.profileDetails


        return (
            <Fragment>

                <section className="page-section" id="about">
                    <header className="masthead  text-white text-center">
                        <div className="container d-flex align-items-center flex-column">
                            <img className="masthead-avatar mb-5" src={developer.picture} alt="" />
                            <h1 className="masthead-heading text-uppercase mb-0">{developer.firstName + " " + developer.lastName}</h1>
                            <div className="divider-custom divider-light">
                                <div className="divider-custom-line"></div>
                            </div>
                            <p className="masthead-subheading font-weight-light mb-0">{developer.experience}</p>
                        </div>
                    </header>

                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-3 text-center .ml-1">
                                <h1 className="">Skills</h1>
                                <hr />
                                <ul className="list-group list-group-flush skills">
                                    <li><h3>SQL</h3></li>
                                    <li><h3>Ruby</h3></li>
                                    <li><h3>Javascript</h3></li>
                                    <li><h3>Java</h3></li>
                                    <li><h3>Python</h3></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )

    }

}

export default ProfileDetail;
