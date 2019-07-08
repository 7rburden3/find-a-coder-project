import React, {Component, Fragment} from 'react';
import DevzList from '../components/DevzList';

class DevzSelectionBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

  }

  

  render (){
    return(
      <Fragment>      
        <DevzList data = {this.props.dataOnLoad} filteredData = {this.props.filteredData}/>
      </Fragment>
    )
  }

}

export default DevzSelectionBox;
