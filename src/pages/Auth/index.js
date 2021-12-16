import React, { Suspense, lazy } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FallbackView } from '../../core/utils/FallbackView';
const LoginPage = lazy(() => import('./Login'));

export default function AuthPage() {

  return (
    <AnimatePresence>
      <Suspense fallback={<FallbackView />}>
        <Switch>
          <Route path='/auth/login' component={LoginPage} />
          <Redirect from='/' exact={true} to='/auth/login'  />
          <Redirect from='/auth' exact={true} to='/auth/login' />
          <Redirect to='/auth/login' />
        </Switch>
      </Suspense>
    </AnimatePresence>
  )
}
