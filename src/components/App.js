import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {peopleFetch} from '../actions/index'

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.peopleFetch();
  }
  render() {
    return (
      <div className="App">
        {this.props.peopleFetch ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.people.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = (state) => {
  console.log("My current state is :" + state)
  return {
    
    people: state.people,
    error: state.error,
    fetching: state.fetching
  }
}
export default connect(mapStateToProps, {peopleFetch})(App);
