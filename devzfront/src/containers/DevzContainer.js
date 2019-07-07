import React, {Fragment} from 'react';
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
        console.log()
        const newData = data._embedded.developers
        const promises = newData

        Promise.all(promises)
          .then((results) => {
            console.log("results", results)
            this.setState({ developers: results});
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
    console.log(this.state.developers)
    return(
      <Fragment>
      <NavBar />
      <HeaderBox/>
      <DevzSelectionBox filter = {this.filter} data = {this.state.developers}/>
      </Fragment>
    )
  }

}

export default DevzContainer;
