/**
 * Dependencies
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

/**
 * Components
 */
import Home from './home/Home';
import Courses from './courses/Courses';
import Events from './events/Events';
import NotFound from './notFound/NotFound';

/**
 * Others
 */
import { URLS } from '../utils/constants';

function Pages() {
  return (
    <main className="main">
      <Switch>
        <Route path={URLS.base} exact component={Home} />
        <Route path={URLS.courses} component={Courses} />
        <Route path={URLS.events} component={Events} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  )
}

export default Pages;