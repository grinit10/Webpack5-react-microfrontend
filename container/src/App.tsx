import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";
import { createBrowserHistory } from "history";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/">
        <Suspense fallback={<div>Loading...</div>}>
          <ContainerApp
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
          />
        </Suspense>
      </Route>
      <Route path="app1">
        <Suspense fallback={<div>Loading...</div>}>
          <CounterAppOne></CounterAppOne>
        </Suspense>
      </Route>
      <Route path="app2">
        <Suspense fallback={<div>Loading...</div>}>
          <CounterAppTwo></CounterAppTwo>
        </Suspense>
      </Route>
    </Switch>
  </Router>
);

export default App;
