import React, {Component, Fragment} from 'react';

class NavBar extends Component{

  render (){

    return(
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
          <div className="container">
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="dev.html">Tutorials</a>
                  </li>
              </ul>
            </div>
          </div>
	      </nav>
        
      </Fragment>
     
    )
  }

}

export default NavBar;
