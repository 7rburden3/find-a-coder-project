import React, {Component, Fragment} from 'react';
import DevDetail from "../components/DevDetail"

class DevzSelectionBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        
      ]
    };

  }

  render (){

    return(
      <Fragment>      
        <DevDetail />
      </Fragment>
    )
  }

}

export default DevzSelectionBox;
