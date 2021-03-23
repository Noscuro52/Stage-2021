import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ephec from '../img/ephec.png'

function Header(props) {
  return(
    <div className="Navigation" id="Nav">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse" id="navbarResponsive">
            <img id="logo" src={ephec} alt="logo Ephec"/>
            <ul className="Menu_navigation">
            <li id="Presentation">
                <Link className="nav-link" to="/presentation">
                  Présentation
                </Link>
              </li>
              <li id="Projets">
                <Link className="nav-link" to="/projets">
                  Projets
                </Link>
              </li>
              <li id="Competences">
                <Link className="nav-link" to="/competences">
                  Compétences
                </Link>
              </li>
              <li id="Activites">
                <Link className="nav-link" to="/activites">
                  Activités
                </Link>
              </li>
              <li id="Resume">
                <Link className="nav-link" to="/resume">
                  Résumé
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