import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counter/counter';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import counter from "./reducers"; //any name can be given as the function in index.js doesn't have a name 

serviceWorker.unregister();

//create the store , plugin the reducer(index.js file)
const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
)

render()
store.subscribe(render);