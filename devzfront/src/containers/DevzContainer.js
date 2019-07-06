import React, {Component, Fragment} from 'react';
import HeaderBox from './HeaderBox'
import NavBar from '../components/NavBar'
import DevzSelectionBox from './DevzSelectionBox'

class DevzContainer extends Component{

constructor(props){
  super(props)
}
  render (){

    return(
      <Fragment>
      <NavBar />
      <HeaderBox/>
      <DevzSelectionBox />
      </Fragment>
    )
  }

}

export default DevzContainer;
