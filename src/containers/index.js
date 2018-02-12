import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Switch,
  HashRouter as Router,
  Route
} from 'react-router-dom'

import NotFound from '../components/NotFound/index.js'
import Admin from '../containers/Admin'
import Front from '../containers/Front'


class App extends Component {

  
  render() {
    return (
      <Router>  
        <div>
          <Switch>
            <Route path="/404" component={NotFound}/>
            <Route path="/admin" component={ Admin }/>
            <Route component={ Front }/>

          </Switch>
          <span>common</span>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
    console.log(state)
    return {
        isFetching: state.globalState.isFetching,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
