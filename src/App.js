import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Pages/Admin';
import Signin from './Pages/Signin';
import Policy from './Pages/Policy';
import Profile from './Pages/Profile';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/policy" component={Policy} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
