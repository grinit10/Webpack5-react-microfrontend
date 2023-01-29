import React, { Suspense } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <ContainerApp
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
          />
        </Route>
        <Route exact path="/app1*">
          <CounterAppOne></CounterAppOne>
        </Route>
        <Route exact path="/app2*">
          <CounterAppTwo></CounterAppTwo>
        </Route>
      </Switch>
    </HashRouter>
  </Suspense>
);

export default App;
