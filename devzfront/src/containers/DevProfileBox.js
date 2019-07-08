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
                <header class="masthead  text-white text-center">
                    <div class="container d-flex align-items-center flex-column">            
                     <img class="masthead-avatar mb-5" src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" alt="" />          
                        <h1 class="masthead-heading text-uppercase mb-0"></h1>      
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                        </div>                    
                        <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </header>

                <div class="jumbotron">
                    <div class="row">                      
                        <div class="col-md-3 text-center .ml-1">
                         <h1 class="">Skills</h1>
                        <hr/>
                                <ul class="list-group list-group-flush skills">
                                    <li><h3>SQL</h3></li>
                                    <li><h3>Ruby</h3></li>
                                    <li><h3>Javascript</h3></li>
                                    <li><h3>Java</h3></li>
                                    <li><h3>Python</h3></li>
                                </ul>          
                         </div>
                    </div>
                </div>   

            </Fragment>
        )
    }

}

export default DevProfileBox;
