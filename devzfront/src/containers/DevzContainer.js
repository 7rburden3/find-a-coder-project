import React, {Fragment} from 'react';
import HeaderBox from './HeaderBox'
import NavBar from '../components/NavBar'
import DevzSelectionBox from './DevzSelectionBox'
import DevzProfileBox from './DevProfileBox'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DevProfileBox from './DevProfileBox';
import AddDevBox from './AddDevBox';
import AddSkillBox from './AddSkillBox';
import AddProjectBox from './AddProjectBox';
import ProjectList from '../components/ProjectList';
import SkillList from '../components/SkillList';
import UpdateDevBox from './UpdateDevBox'


class DevzContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      developers: [],
      filteredDevelopers: [],
      searchState: 0,
      skillSearch: undefined,
      locationSearch: undefined,
      allProjects: [],
      allSkills: [],
      profileDetails: [],

    }
    this.getSkill = this.getSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.filter = this.filter.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getDevProfileDetails = this.getDevProfileDetails.bind(this);
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
    fetch("http://localhost:8080/projects")
    .then(res => res.json())
      .then((data) => {
      console.log(data);
      
      const newData = data._embedded.projects
      const promises = newData
      Promise.all(promises)
      .then((results) => {
        this.setState({ allProjects: results });
        console.log("WHY ARE THERE NO IDS?",this.state.allProjects);

      });
    });

    fetch("http://localhost:8080/skills")
    .then(res => res.json())
    .then((skillData) => {
      console.log(skillData);
      const newSkillData = skillData._embedded.skills
      const promises = newSkillData
      Promise.all(promises)
      .then((results) => {
        this.setState({allSkills: results});
      });
    });


  }

  getSkill (searchTerm) {
    this.setState(
      {skillSearch: searchTerm},this.filter );
    }

    getLocation (searchTerm) {
      this.setState(
        {locationSearch: searchTerm},this.filter);
      }


      filter() {
        let skillSearch = this.state.skillSearch
        let locationSearch = this.state.locationSearch
        if ((skillSearch !== undefined && locationSearch !== undefined) && (skillSearch !== "" && locationSearch !== "")){
          fetch(`http://localhost:8080/developers/search/${skillSearch}/${locationSearch}`)
          .then(res => res.json())
          .then((data) => {
            if(data.length > 0){
              this.setState({ developers: data});
            }
          });
        }
        else if (skillSearch !== undefined && skillSearch !== ""){
          let lowerSearch = this.state.skillSearch.toLowerCase();
          fetch(`http://localhost:8080/developers/search/skill/${lowerSearch}`)
          .then(res => res.json())
          .then((data) => {
            if (data.length > 0) {
              this.setState({ developers: data });
            }
          });
        }
        else if (locationSearch !== undefined && locationSearch !== "") {
          let lowerSearch = this.state.locationSearch.toLowerCase();
          fetch(`http://localhost:8080/developers/search/${lowerSearch}`)
          .then(res => res.json())
          .then((data) => {
            if (data.length > 0) {
              this.setState({ developers: data });
            }
          });
        }
      }

  getDevProfileDetails(details){
    this.setState({profileDetails: details})
  }

  deleteSkill(skillId) {
    fetch(`http://localhost:8080/skills/${skillId}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => {
          if (res.ok) {
            this.setState(prevState => {
               const filteredAllSkills = prevState.allSkills.filter(skill => {
                return skillId !== skill.id
              });
              return {allSkills: filteredAllSkills};
            })
          }
        })

        .catch(err => {
            console.error(err)
        });
  }

  deleteProject(projectId) {
    fetch(`http://localhost:8080/projects/${projectId}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => {
          if (res.ok) {
            this.setState(prevState => {
               const filteredAllProjects = prevState.allProjects.filter(project => {
                return projectId !== project.id
              });
              return {allProjects: filteredAllProjects};
            })
          }
        })

        .catch(err => {
            console.error(err)
        });
  }


      render (){

        let pageid = this.state.profileDetails.id

        return(
          <Router>
          <React.Fragment>
          <NavBar />
          <Route
          exact path="/"
          render={() => {
            return (
              <React.Fragment>
              <HeaderBox getSkill={this.getSkill} getLocation={this.getLocation} />
              <DevzSelectionBox
              dataOnLoad={this.state.developers}
              filteredData={this.state.filteredDevelopers}
              getDetails ={this.getDevProfileDetails}
              />
              </React.Fragment>

            )
          }}
          />
          <Route path="/add-developer" component={AddDevBox} />
          <Route path="/add-skill" component={AddSkillBox} />
          <Route path={`/update-developer/${pageid}`}
            render={() => {
              return (
                <UpdateDevBox
                  profileDetails={this.state.profileDetails}
                  allSkills={this.state.allSkills}
                  allProjects={this.state.allProjects}
                />
              )
            }}
          />
          <Route path="/projects"
          render ={() => {
            return (
              <React.Fragment>
              <AddProjectBox />

              <ProjectList allProjects={this.state.allProjects} onProjectDelete={this.deleteProject} />
              </React.Fragment>
            )
          }}/>
          <Route path="/skills"
          render={() => {
            return (
              <React.Fragment>
                <AddSkillBox/>
                <SkillList
                  allSkills={this.state.allSkills}
                  onSkillDelete={this.deleteSkill}
                />
              </React.Fragment>
            )
          }}/>
          <Route path="/add-skill" component={AddSkillBox}/>
          <Route path={`/dev-profile/${pageid}`}
            render={() =>{
              return(
                <DevProfileBox
                  profileDetails = {this.state.profileDetails}
                  getDetails={this.getDevProfileDetails}
                />
              )
            }}
          />
          </React.Fragment>
          </Router>
        )
      }

    }

    export default DevzContainer;
