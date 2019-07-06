import React, {Component, Fragment} from 'react';
import DevzList from '../components/DevzList';

class DevzSelectionBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id:1,
          url: "https://source.unsplash.com/TMgQMXoglsM/500x350",
          name: "Thomas",

        },
        {
          id:2,
          url: "https://source.unsplash.com/9UVmlIb0wJU/500x350",
          name: "Tasha",

        },
        {
          id: 2,
          url: "https://source.unsplash.com/sNut2MqSmds/500x350",
          name: "Steve",

        },
        {
          id: 2,
          url: "https://source.unsplash.com/ZI6p3i9SbVU/500x350",
          name: "Helen",

        }

        
      ]
    };

  }

  render (){

    return(
      <Fragment>      
        <DevzList data = {this.state.data}/>
      </Fragment>
    )
  }

}

export default DevzSelectionBox;
