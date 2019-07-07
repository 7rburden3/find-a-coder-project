import React, { Component } from "react";
import DevDetail from "./DevDetail";

class DevzList extends Component {
    constructor(props) {
        super(props);

    }


    

    render() {

        const devNodes = this.props.data.map(developer => {
            return (
                <DevDetail avatar="https://source.unsplash.com/TMgQMXoglsM/500x350" key={developer.id} name={developer.firstName}></DevDetail>
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