/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

/**
 * others
 */
import { URLS, cursos } from '../../../../utils/constants';

function CoursesList() {
  return (
    <div className="curso">
      <h2>Cursos</h2>
      <ul>
        {cursos.map(({ id, name, pathName }) => {
          return (
            <li key={id} >
              <Link to={`${URLS.courses}/${pathName}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CoursesList;