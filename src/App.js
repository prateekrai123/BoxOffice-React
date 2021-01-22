import React from 'react';
import { Switch, Route } from 'react-router';
import Navs from './components/Navs';

function App() {
  return (
    <div>
      <Navs />

      <Switch>
        <Route exact path="/">
          This is home page.
        </Route>
        <Route exact path="/abc">
          This is abc.
        </Route>
        <Route>Page Not Found 404</Route>
      </Switch>
    </div>
  );
}

export default App;
