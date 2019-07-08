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
    skillSearch: undefined,
    locationSearch: undefined
  }
  this.getSkill = this.getSkill.bind(this);
  this.filter = this.filter.bind(this);
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
      this.filter()
      console.log(this.skillSearch);
      
    }

  getSkill (searchTerm) {
    this.setState( 
     {skillSearch: searchTerm},this.filter
    );
    // console.log(this.state.skillSearch);
    // this.filter();
  }

  filter() {
    console.log('i am running')
   if (this.state.skillSearch !== undefined){     
    let lowerSearch = this.state.skillSearch.toLowerCase();
      console.log(`http://localhost:8080/developers/skill/${lowerSearch}`)
      fetch(`http://localhost:8080/developers/skill/${lowerSearch}`)
        .then(res => res.json())
        .then((data) => {
          
          if(data.length > 0){
          const promises = data
          
          Promise.all(promises)
            .then((results) => {
              this.setState({ developers: results });
              // console.log(this.state.filteredDevelopers)
            });
          }
        });
      }
  }

  


  render (){
    // console.log(this.state.developers)
    return(
      <Fragment>
        <NavBar />
        <HeaderBox filter={this.getSkill}/>
        <DevzSelectionBox  
          dataOnLoad = {this.state.developers} 
          filteredData = {this.state.filteredDevelopers} 
        />
      </Fragment>
    )
  }

}

export default DevzContainer;
