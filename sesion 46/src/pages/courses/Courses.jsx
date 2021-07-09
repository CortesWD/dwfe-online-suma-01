/**
 * Dependencies
 */
import React from "react";
import { Route } from 'react-router-dom';

/**
 * Components
 */
import Course from './components/course/Course';
import CoursesList from './components/coursesList/CoursesList';

/**
 * Styles
 */
import './Courses.css';

/**
 * Others
 */
import { URLS, cursos } from '../../utils/constants';
import ux from '../../assets/ux.svg';
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import ds from "../../assets/datascience.svg";

const { courses } = URLS;

function Courses() {
  
  const img = (name) => {
    let svg = '';
    switch (name) {
      case 'ux':
        svg = ux;
        break;
      case 'ds':
        svg = ds;
        break;
      case 'fsv': 
        svg = backend
        break;
      case 'fa':
        svg = frontend;
        break;
      default:
        svg = '';
        break;
    }
    return svg;
  }

  return (
    <div>
      <Route exact path={courses} component={CoursesList} />
      {cursos.map((curso) => {
        return (
          <Route
            exact
            path={`${courses}/${curso.pathName}`}
            render={() => {
              return <Course name={curso.name} image={img(curso.pathName)} />
            }}
          />
        )
      })}
    </div>
  )
}

export default Courses;