import React from 'react';
import { ProtectedRoute } from 'shared/components';
import { Redirect, Route, Switch } from 'react-router-dom';

/* Import UI Components */
import { NavBar } from '../components';

/* Import Route Components */
import { Profile } from './profile';
import { AuthCallback } from './auth';

export default class Router extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={AuthCallback} />
        <Route>
          <div>
            <NavBar />
            <hr />
            <div>
              <Switch>
                <ProtectedRoute exact path="/" component={Profile} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </Route>
      </Switch>
    );
  }
}
