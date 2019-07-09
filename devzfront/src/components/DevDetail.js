import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom";


class DevDetail extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }
  
handleClick(){
  this.props.getDetails(this.props.allDetails)
}

  render (){
    console.log(this.props.avatar)
   

    return(
        <Fragment>
        <div className="col-xl-3 col-md-6 mb-4">
          <Link to={`/dev-profile/${this.props.id}`} style={{ textDecoration: 'none' }} onClick = {this.handleClick}>
          <div className="card border-0 shadow">
            <img src={this.props.avatar} className="card-img-top" alt="..."/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{this.props.name}</h5>
                <div className="card-text text-black-50">{this.props.experience}</div>
              </div>
		  	  </div>
        </Link>
        </div>
        </Fragment>
        )
        
  }

}

export default DevDetail;
