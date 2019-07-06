import React, {Component} from 'react';

class SkillSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchSkill: "",
      suggestions: [],
      text = " "
    };
    this.items = [
      "Ruby",
      "Java",
      "Javascript",
      "Python",
      "SQL",
      "Sinatra"
    ]

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = (event) => {
    let value = event.target.value
    event.preventDefault();
    this.setState({ searchSkill: value });
    let suggestions = []
    if(value.length > 0){
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
      this.setState({ suggestions: suggestions })
      console.log(suggestions)
    }
    
    console.log(this.state.suggestions)
  } 
  

  renderSuggestions(){
    const { suggestions} = this.state
    if(suggestions.length === 0 ){
      return null
    }
    return (
      <ul>
        {suggestions.map((item)=> onClick=<li>{item}</li>)}
      </ul>
    )
  }

  suggestionSelected(value){
    this.setState
  }



  handleSubmit(event) {
    event.preventDefault();
  }

  render (){

    const skillItems = this.items.map(item => {
      return <li>{item}</li>
    });


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
            <ul> 
             {this.renderSuggestions()}
            </ul>
        </form>
			</div>
    )
  }

}

export default SkillSearch;
