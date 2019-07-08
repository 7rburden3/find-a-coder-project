import React, {Component} from 'react';
import { Link } from "react-router-dom";

class LocationSearch extends Component{

  constructor(props) {
    super(props);
    this.state = {
      searchLocation: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const value = event.target.value;
    event.preventDefault();
    this.setState({ searchLocation: value });
    this.props.getLocation(value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render (){

    return(
      
      <div className="mb-4 col-md-6">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control-lg"
            type="text"
            placeholder="Location"
            aria-label="Search"
            name="searchLocation"
            onChange={this.handleChange}
            value={this.state.searchLocation}
          />
        </form>
      </div>
    )
  }

}

export default LocationSearch;
