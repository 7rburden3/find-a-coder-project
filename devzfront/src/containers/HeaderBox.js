import React, {Component, Fragment} from 'react';
import SkillSearch from "../components/SkillSearch"
import LocationSearch from "../components/LocationSearch"

class HeaderBox extends Component{
  constructor(props) {
    super(props);

  }

  render (){

    return(
      <Fragment>
        <header className="masthead text-center py-5 mb-4">
          <div className="container">
            <h1 className="font-weight-light text-white">Find a Developer</h1>

            <div className="row">
              <SkillSearch filterSkill = {this.props.filter} />
              <LocationSearch />
            </div>
          </div>
</header>
    
     
      </Fragment>
    )
  }

}

export default HeaderBox;
