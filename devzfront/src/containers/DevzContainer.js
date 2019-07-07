import React, {Fragment} from 'react';
import HeaderBox from './HeaderBox'
import NavBar from '../components/NavBar'
import DevzSelectionBox from './DevzSelectionBox'

class DevzContainer extends React.Component{
constructor(props){
  super(props)
  this.state = {
    developers: [],
    filteredDevelopers: [],
    searchState: 0,
    searchTerm: undefined
  }
  this.filterBySkill = this.filterBySkill.bind(this);
}


  componentDidMount() {
    fetch("http://localhost:8080/developers")
      .then(res => res.json())
      .then((data) => {
        const newData = data._embedded.developers
        const promises = newData
        Promise.all(promises)
          .then((results) => {
            this.setState({ developers: results});
          });
      });
    
  }

  filterBySkill(searchTerm) {
    if(searchTerm !== undefined){
    const lowerSearch = searchTerm.toLowerCase();
      console.log(`http://localhost:8080/developers/skill/${searchTerm}`)
      fetch(`http://localhost:8080/developers/skill/${searchTerm}`)
        .then(res => res.json())
        .then((data) => {
          
          if(data.length > 0){
          const promises = data
          
          Promise.all(promises)
            .then((results) => {
              this.setState({ developers: results });
              console.log(this.state.filteredDevelopers)
            });
          }
        });
    }
  }



  render (){
    console.log(this.state.developers)
    return(
      <Fragment>
        <NavBar />
        <HeaderBox filter={this.filterBySkill}/>
        <DevzSelectionBox  
          dataOnLoad = {this.state.developers} 
          filteredData = {this.state.filteredDevelopers} 
        />
      </Fragment>
    )
  }

}

export default DevzContainer;
