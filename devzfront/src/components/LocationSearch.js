import React, {Component} from 'react';

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
    event.preventDefault();
    this.setState({ searchLocation: event.target.value });
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
