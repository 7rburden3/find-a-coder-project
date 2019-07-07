import React, {Component} from 'react';

class SkillSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchSkill: "",
      suggestions: [],
      text: ""
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
      
      console.log(suggestions)
    }
    this.setState({ suggestions: suggestions, text: value })
    
    console.log(this.state.suggestions)
  } 

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }))
  }

  renderSuggestions(){
    const { suggestions} = this.state
    if(suggestions.length === 0 ){
      return null
    }
    return (
        <ul className="suggestions">
          {suggestions.map((item)=> <li onClick={()=> this.suggestionSelected(item)}>{item}</li>)}
        </ul>
    )
  }

  



  handleSubmit(event) {
    event.preventDefault();
  }

  render (){

    return(
      <div className="mb-4 col-md-6">
        <form onSubmit={this.handleSubmit}>
          <input 
            className ="form-control-lg" 
            type="text" 
            placeholder="Skills" 
            aria-label="Search"
            name = "searchSkill"
            onChange={this.handleChange}
            value = {this.state.text}
            />
          {/* {this.renderSuggestions()} */}
        </form>
         
			</div>
    )
  }

}

export default SkillSearch;
