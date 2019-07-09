import React, { Component, Fragment } from 'react';
import profileDetails from '../components/ProfileDetail'
import ProfileDetail from '../components/ProfileDetail';

class DevProfileBox extends Component {
    constructor(props) {
        super(props);
    

    }





    render() {
        console.log(this.props.profileDetails)
        return (
            <Fragment>
               <ProfileDetail profileDetails = {this.props.profileDetails}/>
            </Fragment>
        )
    }

}

export default DevProfileBox;
