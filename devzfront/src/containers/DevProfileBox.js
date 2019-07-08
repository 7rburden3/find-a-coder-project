import React, { Component, Fragment } from 'react';
import SkillSearch from "../components/SkillSearch"
import LocationSearch from "../components/LocationSearch"

class DevProfileBox extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Fragment>
                <section classNameName="page-section" id="about">
                <header class="masthead  text-white text-center">
                    <div className="container d-flex align-items-center flex-column">            
                     <img className="masthead-avatar mb-5" src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" alt="" />          
                        <h1 className="masthead-heading text-uppercase mb-0"></h1>      
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                        </div>                    
                        <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </header>

                <div className="jumbotron">
                    <div className="row">                      
                        <div className="col-md-3 text-center .ml-1">
                         <h1 className="">Skills</h1>
                        <hr/>
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

export default DevProfileBox;
