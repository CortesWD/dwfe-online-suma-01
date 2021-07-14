/**
 * Dependencies
 */
import React, { useContext } from "react";

/**
 * Styles
 */
import "./Header.css";

/**
 * Others
 */
import { URLS } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';

function Header() {
  /**
   * se usa el contexto definido
   * para extraer ya sea el valor o el setValue
   */
  const {store} = useContext(AppContext);
  return (
    <header>
      store updated: {store}
      <nav>
        <ul className="nav-bar">
          <li>
            <a className="nav-item" href={URLS.base}> Home </a>
          </li>
          <li>
            <a className="nav-item" href={URLS.courses}> Cursos </a>
          </li>
          <li>
            <a className="nav-item" href={URLS.events}>Próximos eventos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
