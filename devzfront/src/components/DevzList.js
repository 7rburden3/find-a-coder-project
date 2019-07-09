import React, { Component } from "react";
import DevDetail from "./DevDetail";

class DevzList extends Component {
    constructor(props) {
        super(props);

    }


    

    render() {

        const devNodes = this.props.data.map((developer, index) => {
            console.log(this.props)
            return (
                <DevDetail avatar={developer.picture} id={developer.id} key={developer.id} name={developer.firstName + " " +developer.lastName} experience = {developer.experience} getDetails ={this.props.getDetails} allDetails={developer}></DevDetail>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {devNodes}
                </div>
            </div>
        )
    }
}

export default DevzList;