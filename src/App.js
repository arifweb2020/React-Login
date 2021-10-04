import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import ProtecedRouting from './ProtectedRouting';
import useAuth from './useAuth';
import Profile from './Pages/Profile';

function App() {
  const [auth, login, logout] = useAuth(false)
  return (
    <Router>
      <div className="App">
        <Nav
          loginCondition={auth ?
            (<button className="btn btn-sm btn-primary" onClick={logout}>Logout</button>)
            : (<button className="btn btn-sm btn-warning" onClick={login}>Login</button>)
          }
          personalPage={auth ? <Link className="nav-link" to="/profile">Profile</Link> : null}
        />
        {/* {auth ?
          (<>
            <p>u are loggedin</p><button className="btn btn-sm btn-primary" onClick={logout}>Logout</button> </>)
          : (<><p>u are logout</p><button className="btn btn-sm btn-warning" onClick={login}>Login</button></>)} */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <ProtecedRouting path="/login" component={Login} isAuth={auth} />
          <ProtecedRouting path="/profile" component={Profile} isAuth={auth} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
