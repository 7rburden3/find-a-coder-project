import React, {Component, Fragment} from 'react';
import DevzList from '../components/DevzList';

class DevzSelectionBox extends Component{
  constructor(props) {
    super(props);

  
    
  }

  render (){
    console.log(this.props.data)
    return(
      <Fragment>      
        <DevzList data = {this.props.data}/>
      </Fragment>
    )
  }

}

export default DevzSelectionBox;
