import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FallbackView } from '../../core/utils/FallbackView';
const DashboardPage = lazy(() => import('./Home'));
const CustomerPage = lazy(() => import('./Customer'));

export default function BasePage() {

  return (
    <AnimatePresence>
      <Suspense fallback={<FallbackView />}>
        <Switch>  
          {
            /* Redirect from root URL to /dashboard. */
            <Redirect exact from="/" to="/dashboard" />
          }
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/customer/:id" component={CustomerPage} />
          <Redirect to="error" />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};











