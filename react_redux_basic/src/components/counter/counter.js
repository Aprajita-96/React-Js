import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './counter.css' ;

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <section className="jumbotron">
       <h3>Count: {value} times</h3><br/><br/><br/>

        <button className="btn btn-lg btn-primary" 
                onClick={onIncrement}> Up  </button>
        {' '}
        <button className="btn btn-lg btn-danger" 
                onClick={onDecrement}> Down </button> <br/><br/><br/>

      </section>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter ;

