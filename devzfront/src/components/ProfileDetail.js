import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeveloperSkillList from '../components/DeveloperSkillList';
import DeveloperProjectList from '../components/DeveloperProjectList';


class ProfileDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developerSkills: [],
            developerProjects: []
        }

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleUpdateClick = this.handleUpdateClick.bind(this)
        this.findDeveloperSkills = this.findDeveloperSkills.bind(this)
        this.findDeveloperProjects = this.findDeveloperProjects.bind(this)
    }

    handleUpdateClick() {
        console.log("Hello", this.props)
        this.props.getDetails(this.props.profileDetails)
    }


    handleDeleteClick(event) {
        event.preventDefault()
        this.props.deleteDeveloper(this.props.profileDetails)

    }


    componentDidMount() {
        this.findDeveloperSkills(this.props.profileDetails.id)
        this.findDeveloperProjects(this.props.profileDetails.id)
    }

    findDeveloperSkills(id) {
        fetch(`http://localhost:8080/developers/${this.props.profileDetails.id}/skills`)
            .then(res => res.json())
            .then((data) => {
                const newData = data._embedded.skills
                const promises = newData
                Promise.all(promises)
                    .then((results) => {
                        this.setState({ developerSkills: results });
                        console.log(this.state.developerSkills);
                    });
            });
    }

    findDeveloperProjects(id) {
        fetch(`http://localhost:8080/developers/${this.props.profileDetails.id}/projects`)
            .then(res => res.json())
            .then((data) => {
                const newData = data._embedded.projects
                const promises = newData
                Promise.all(promises)
                    .then((results) => {
                        this.setState({ developerProjects: results });
                        console.log(this.state.developerProjects);
                    });
            });
    }



    render() {
        console.log(this.props.profileDetails)
        let developer = this.props.profileDetails
        console.log(this.props);

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
                            <div className="col-md-3 .ml-1 skills text-center">
                                <h4 className="">{developer.firstName}'s Areas of Expertise</h4>
                                <hr />
                                <ul className="list-group list-group-flush skills">
                                    <DeveloperSkillList developerSkills={this.state.developerSkills} />
                                </ul>

                                <h1 className="">Projects</h1>
                                <hr />
                                <ul className="list-group list-group-flush projects">
                                    <DeveloperProjectList developerProjects={this.state.developerProjects} />
                                </ul>

                            </div>
                            <div className= "col-md-8" >
                                <h3>Who is {developer.firstName}?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                                <p>Vitae auctor eu augue ut lectus. Augue lacus viverra vitae congue. Sit amet risus nullam eget. Id eu nisl nunc mi. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ante in nibh mauris cursus mattis molestie a. Mus mauris vitae ultricies leo integer malesuada nunc vel. Magna sit amet purus gravida quis blandit. Volutpat est velit egestas dui id ornare. Nibh ipsum consequat nisl vel. Et netus et malesuada fames. Orci dapibus ultrices in iaculis nunc sed augue lacus. Arcu non odio euismod lacinia at quis risus sed vulputate. Consectetur a erat nam at lectus urna duis. Sed sed risus pretium quam. A lacus vestibulum sed arcu non odio euismod lacinia at. Ut tortor pretium viverra suspendisse potenti nullam ac. Justo donec enim diam vulputate ut. Blandit libero volutpat sed cras ornare arcu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Complify co. 2019</span>
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
                                        <Link to= {`/update-developer/${developer.id}`} onClick={this.handleUpdateClick}>
                                        Update
                                        </Link>
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
