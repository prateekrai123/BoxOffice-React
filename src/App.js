import React from 'react';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page.
      </Route>
      <Route exact path="/abc">
        This is abc.
      </Route>
      <Route>Page Not Found 404</Route>
    </Switch>
  );
}

export default App;
