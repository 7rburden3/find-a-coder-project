import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component{

  render (){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
        <div className="container">
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
                <Link className="nav-link" to="/add-skill">Add Skill</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-project">Add Project</Link>
              </li>
				</ul>
			</div>
          </div>
	</nav>
    )
  }

}

export default NavBar;
