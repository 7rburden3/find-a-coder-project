import React, {Component, Fragment} from 'react';

class DevDetail extends Component{

  render (){

    return(
        <Fragment>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
            <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="..."/>
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
		  	  </div>
        </div>
        </Fragment>
        )
        
  }

}

export default DevDetail;