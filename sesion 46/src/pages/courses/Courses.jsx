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
import { URLS, CURSOS } from '../../utils/constants';
import ux from '../../assets/ux.svg';
import frontend from "../../assets/frontend.svg";
import backend from "../../assets/backend.svg";
import ds from "../../assets/datascience.svg";

const { courses } = URLS;

/**
 * @description Function to evaluate which image component should render
 * @param {String} name
 * @returns image component
 */
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

function Courses() {
  return (
    <div>
      <Route exact path={courses} component={CoursesList} />
      {CURSOS.map(({ pathName, name }) => {
        return (
          <Route
            exact
            path={`${courses}/${pathName}`}
            render={() => {
              return <Course name={name} image={img(pathName)} />
            }}
          />
        )
      })}
    </div>
  )
}

export default Courses;