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
                <DevDetail avatar="https://source.unsplash.com/TMgQMXoglsM/500x350" id={this.props.id} key={this.props.id} name={developer.firstName + " " +developer.lastName} experience = {developer.experience} ></DevDetail>
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