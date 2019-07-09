import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from "react-router-dom";
import DevProfileBox from '../containers/DevProfileBox';


class DevDetail extends Component{
  constructor(props) {
    super(props);

  }
  


  render (){
    console.log(this.props.avatar)
   

    return(
        <Fragment>
        
        <div className="col-xl-3 col-md-6 mb-4">
          <Link to={`/dev-profile`} style={{ textDecoration: 'none' }}>
          <div className="card border-0 shadow">
            <img src={this.props.avatar} className="card-img-top" alt="..."/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{this.props.name}</h5>
                <div className="card-text text-black-50">{this.props.experience}</div>
              </div>
		  	  </div>
        </Link>
        </div>
        <Router>
        <Route  path={`/dev-profile`} component={DevProfileBox} />
        </Router>
        </Fragment>
        )
        
  }

}

export default DevDetail;
