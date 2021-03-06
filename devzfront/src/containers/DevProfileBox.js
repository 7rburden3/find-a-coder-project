import React, { Component, Fragment } from 'react';
import profileDetails from '../components/ProfileDetail'
import ProfileDetail from '../components/ProfileDetail';
import DeveloperSkillList from '../components/DeveloperSkillList';

class DevProfileBox extends Component {
  constructor(props) {
    super(props)

    this.sendDeveloperDelete = this.sendDeveloperDelete.bind(this)

  }

  sendDeveloperDelete(developer) {
    fetch(`http://localhost:8080/developers/${developer.id}`,
      {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        }
      }).then(() => {
        window.location = '/'
      })
      // .then(res => res.json())
      // .then(returnData =>

    }


    render() {
      return (
        <Fragment>
        <ProfileDetail profileDetails = {this.props.profileDetails} deleteDeveloper = {this.sendDeveloperDelete} getDetails ={this.props.getDetails}/>
        
        </Fragment>
      )
    }

  }

  export default DevProfileBox;
