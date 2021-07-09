/**
 * Dependencies
 */
import React from "react";
import { Route } from "react-router-dom";

/**
 * Components
 */
import Home from './home/Home';
import Courses from './courses/Courses';
import Events from './events/Events';

/**
 * Others
 */
import { URLS } from '../utils/constants';

function Pages() {
  return (
    <main className="main">
      <Route path={URLS.base} exact component={Home} />
      <Route path={URLS.courses} component={Courses} />
      <Route path={URLS.events} component={Events} />
    </main>
  )
}

export default Pages;