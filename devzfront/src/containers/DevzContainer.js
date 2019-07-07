import React, {Component, Fragment} from 'react';
import HeaderBox from './HeaderBox'
import NavBar from '../components/NavBar'
import DevzSelectionBox from './DevzSelectionBox'

class DevzContainer extends React.Component{
constructor(props){
  super(props)
  this.state = {
    developers: [],
    filteredDevelopers: []
  }

  this.filter = this.filter.bind(this);
}


  componentDidMount() {
    fetch("http://localhost:8080/developers")
      .then(res => res.json())
      .then((data) => {
        const newData = data.slice(0, 20);
        const promises = newData.map((id) => {
          return fetch(`http://localhost:8080/developers/${id}`)
            .then(res => res.json());
        });

        Promise.all(promises)
          .then((results) => {
            this.setState({ developers: results, filteredDevelopers: results });
          });
      });
  }

  filter(searchTerm) {
    // const lowerSearch = searchTerm.toLowerCase();
    // const filteredDevelopers = this.state.developers.filter((developer) => {
    //   developer.skill.toLowerCase().indexOf(lowerSearch) > -1;
    // });
    // this.setState({ filteredDevelopers: filteredDevelopers });
    console.log(searchTerm)
  }


  render (){

    return(
      <Fragment>
      <NavBar />
      <HeaderBox/>
      <DevzSelectionBox filter = {this.filter}/>
      </Fragment>
    )
  }

}

export default DevzContainer;
