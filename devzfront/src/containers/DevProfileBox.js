import React, { Component, Fragment } from 'react';
import profileDetails from '../components/ProfileDetail'
import ProfileDetail from '../components/ProfileDetail';
import DeveloperSkillList from '../components/DeveloperSkillList';

class DevProfileBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      developerSkills: []
    }

    this.sendDeveloperDelete = this.sendDeveloperDelete.bind(this)
    this.findDeveloperSkills = this.findDeveloperSkills.bind(this)
  }

  sendDeveloperDelete(developer) {
    console.log(developer.id);
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

    componentDidMount(){
      this.findDeveloperSkills(this.props.profileDetails.id)
    }

    findDeveloperSkills(id){
      fetch(`http://localhost:8080/developers/${id}/skills`)
      .then(res => res.json())
      .then((data) => {
        const newData = data._embedded.skills
        const promises = newData
        Promise.all(promises)
        .then((results) => {
          this.setState({ developerSkills: results });
          console.log(this.state.developerSkills);
        });
      });
    }

    render() {
      console.log(this.props.profileDetails);
      return (
        <Fragment>
        <ProfileDetail profileDetails = {this.props.profileDetails} deleteDeveloper = {this.sendDeveloperDelete}/>
        <DeveloperSkillList developerSkills = {this.state.developerSkills}/>
        </Fragment>
      )
    }

  }

  export default DevProfileBox;
