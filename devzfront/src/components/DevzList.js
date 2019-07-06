import React, { Component } from "react";
import DevDetail from "./DevDetail";

class DevzList extends Component {
    render() {
        const devNodes = this.props.data.map(developer => {
            return (
                <DevDetail avatar={developer} key={developer.id} name={developer.name}></DevDetail>
            );
        });

        return (
            <div className="comment-list">
                {devNodes}
            </div>
        )
    }
}

export default DevzList;