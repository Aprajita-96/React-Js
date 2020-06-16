import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// ************************        DOM MECHANISM   **************************************
//1---> render--->update virtual DOM
    //2---> reactDOM----> dumps into actual DOM
    // 3----> re render---> react render updates the virtual DOM by keeping the object. 
    //4---> react DOM comes in and does the diff, and takes the latest and dumps into actual DOM, 

    //Best performance? 
    //becuase the Delta is small , and the whole actual DOM is not updated , but only the delta is updated.
    //reconciliation algorithm--1950

  //Classification of components
  //hoc---- higher order comp
  // stateless and stateful components ( usage of state and not usage of state decides whether stateless and stateful)
  //container-presenter design pattern (Example- look into class-to-hoc.js)
