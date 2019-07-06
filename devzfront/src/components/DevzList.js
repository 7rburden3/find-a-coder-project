import React, { Component } from "react";
import DevDetail from "./DevDetail";

class DevzList extends Component {
    render() {
        const devNodes = this.props.data.map(developer => {
            return (
                <DevDetail avatar={developer.url} key={developer.id} name={developer.name}></DevDetail>
            );
        });

        return (
            <div class="container">
                <div class="row">
                    {devNodes}
                </div>
            </div>
        )
    }
}

export default DevzList;