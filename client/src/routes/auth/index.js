import React from 'react';
import { Route } from 'react-router';

import { AuthContainer } from './root';
import { CallbackContainer } from './callback';

export const AuthCallback = () => (
  <React.Fragment>
    <Route exact path="/auth/" component={AuthContainer} />
    <Route path="/auth/callback" component={CallbackContainer} />
  </React.Fragment>
);
