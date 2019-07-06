import React, {Component} from 'react';

class SkillSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchSkill: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchSkill: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render (){

    return(
      <div className="active-cyan-3 active-cyan-4 mb-4 col-md-6">
        <form onSubmit={this.handleSubmit}>
          <input 
            className ="form-control-lg" 
            type="text" 
            placeholder="Skills" 
            aria-label="Search"
            name = "searchSkill"
            onChange={this.handleChange}
            value = {this.state.searchSkill}
            />
        </form>
			</div>
    )
  }

}

export default SkillSearch;
