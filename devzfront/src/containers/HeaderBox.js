import React, {Component, Fragment} from 'react';
import SkillSearch from "../components/SkillSearch"
import LocationSearch from "../components/LocationSearch"

class HeaderBox extends Component{

  render (){

    return(
      <Fragment>
        <header className="masthead text-center py-5 mb-4">
          <div className="container">
            <h1 className="font-weight-light text-white">Find a Developer</h1>

            <div className="row">
              <SkillSearch />
              <LocationSearch />
            </div>
          </div>
</header>
    
     
      </Fragment>
    )
  }

}

export default HeaderBox;
