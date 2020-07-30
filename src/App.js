import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import KidsContainer from './containers/KidsContainer'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'


class App extends React.Component {

  render() {
    return (
      <div style={{margin: '20px'}}>
        <Router>
            <NavBar/>
            <KidsContainer/>
            <Route exact path='/' component={LandingPage}/>
        </Router>
      </div>
    );
  }
}


export default App;
