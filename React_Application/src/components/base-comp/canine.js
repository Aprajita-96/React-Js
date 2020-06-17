import React, { Component } from "react";
import logo from "./logo.svg";


import { connect } from "react-redux";

class Canine extends Component {

  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Canine Exhibition</h1>
        </header>

        <br /><br /><br />

        { fetching ? (
          <button className="btn btn-warning" disabled>Fetching...</button>
        ) : (
          <button className="btn btn-primary" onClick={onRequestDog}>Get another new Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Error: something went wrong!</p>}  <br /><br /><br />

        <img src={dog || logo} className="" alt="logo" />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

//bridge -connect (gives flexibilty to selectively choose data like line 38-40.)
//below is the subscription to view as well .
export default connect(mapStateToProps, mapDispatchToProps)(Canine);
