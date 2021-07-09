/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

function Course({ name, image }) {
  return (
    <div>
      <div className="curso-info">
        <h1>Curso de {name.toUpperCase()}</h1>
        <img height="100px" src={image} alt={name} />
      </div>
      <Link to="/cursos">
        <h4>volver</h4>
      </Link>
    </div>
  )
}

export default Course;