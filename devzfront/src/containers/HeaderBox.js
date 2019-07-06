import React, {Component, Fragment} from 'react';
import SkillSearch from "../components/SkillSearch"
import LocationSearch from "../components/LocationSearch"

class HeaderBox extends Component{

  render (){

    return(
      <Fragment>
      <h2>Header Box</h2>
      <SkillSearch />
      <LocationSearch/>
      </Fragment>
    )
  }

}

export default HeaderBox;
