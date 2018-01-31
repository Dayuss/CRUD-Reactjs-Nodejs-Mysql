import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Add from './AddMhs';
import Edit from './EditMhs';

class App extends Component {
  render() {
    /* <Link to={'/'}>Home</Link> */
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/edit/:id' component={Edit} />
          </Switch>
      </Router>
    );
  }
}
export default App;