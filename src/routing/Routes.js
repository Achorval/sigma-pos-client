import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import {LeftSidebar} from '../core/layout/blueprints';
import BasePage from '../pages/Dashboard/BasePage';
import AuthPage from '../pages/Auth';
import {Logout} from '../pages/Auth/Logout';
import ErrorsPage from '../pages/Error/404';


export default function Routes() {

  const { isAuthorized } = useSelector(
    ({ UserReducer }) => ({
      isAuthorized: UserReducer.token != null,
    }),
    shallowEqual
  );

  return (

      <Switch>
        {!isAuthorized ? (
          <Route>
            <AuthPage />
          </Route>
        ) : (
          <Redirect from="/auth" to="/"/>
        )}

        <Route path="/error" component={ErrorsPage}/>
        <Route path="/logout" component={Logout}/>


        {!isAuthorized ? (
          <Redirect to="/auth/login"/>
        ) : (
          <LeftSidebar>
            <BasePage/>
          </LeftSidebar>
        )}
      </Switch>
  )
}
