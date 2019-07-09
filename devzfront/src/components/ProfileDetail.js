import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileDetail extends Component {
    constructor(props) {
        super(props);


        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(event) {
        event.preventDefault()
        this.props.deleteDeveloper(this.props.profileDetails)
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

                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; yossaj 2019</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/yossaj">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://medium.com/@kennethastewart">
                                            <i className="fab fa-medium-m"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/kenneth-stewart-b57933184/">
                                            <FontAwesomeIcon
                                                icon="linkedin"
                                                color="#6DB65B"
                                                size="sm"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.goodreads.com/user/show/28391094-kenneth">
                                            <i className="fab fa-goodreads-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a href="#">Update</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" onClick={this.handleDeleteClick}>Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )

    }

}

export default ProfileDetail;
