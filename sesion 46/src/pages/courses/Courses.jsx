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

const { courses } = URLS;

function Courses() {
  return (
    <div>
      <Route exact path={courses} component={CoursesList} />
      {CURSOS.map(({ pathName, name, image }) => {
        return (
          <Route
            exact
            path={`${courses}/${pathName}`}
            render={() => {
              return <Course name={name} image={image} />
            }}
          />
        )
      })}
    </div>
  )
}

export default Courses;