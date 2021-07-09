/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

/**
 * Styles
 */
import "./Header.css";

/**
 * Others
 */
import { URLS } from '../../utils/constants';

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link className="nav-item" to={URLS.base}> Home </Link>
          </li>
          <li>
            <Link className="nav-item" to={URLS.courses}> Cursos </Link>
          </li>
          <li>
            <Link className="nav-item" to={URLS.events}>Próximos eventos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
