import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header(props) {
  return(
    <div className="Navigation" id="Nav">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse" id="navbarResponsive">
            <ul className="Menu_navigation">
            <li id="Galerie">
                <Link className="nav-link" to="/galerie">
                  Galerie
                </Link>
              </li>
              <li id="Blog">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li id="Service">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li id="About">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li id="Contact">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}

export default withRouter(Header);