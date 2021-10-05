import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Pages/Admin';
import Signin from './Pages/Signin';
import Logout from './Pages/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/admin" component={Admin} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
