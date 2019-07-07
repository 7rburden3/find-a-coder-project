import React, { Component } from "react";
import DevDetail from "./DevDetail";

class DevzList extends Component {
    render() {
        const devNodes = this.props.data.map(developer => {
            return (
                <DevDetail avatar= "/../../public/holder.jpg" key={developer.id} name={developer.firstName}></DevDetail>
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