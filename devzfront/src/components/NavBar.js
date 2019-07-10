import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component{

  render (){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Devz</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home
							<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-developer">Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
				</ul>
			</div>
          </div>
	</nav>
    )
  }

}

export default NavBar;
