import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Pages/Admin';
import Signin from './Pages/Signin';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Signin} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
