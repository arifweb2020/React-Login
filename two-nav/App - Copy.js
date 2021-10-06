import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InvestContainer from './InvestContainer';
import MainContainer from './MainContainer';
// import About from './Pages/About';
// import Home from './Pages/Home';
// import Invest from './Pages/Invest';
// import Service from './Pages/Service';

function App() {
  return (
    <div>
      <MainContainer/>
      <InvestContainer/>
      </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/"
    //       component={(props) => <MainContainer {...props}><Home {...props} /></MainContainer>} />
    //     <Route exact path="/about"
    //       component={(props) => <MainContainer {...props}><About {...props} /></MainContainer>} />
    //     <Route exact path="/service"
    //       component={(props) => <MainContainer {...props}><Service {...props} /></MainContainer>} />
    //     <Route exact path="/invest"
    //       component={(props) => <InvestContainer {...props}><Invest {...props} /></InvestContainer>} />

    //   </Switch>
    // </Router>
  );
}

export default App;
