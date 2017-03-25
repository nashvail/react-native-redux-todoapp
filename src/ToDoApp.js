import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

import App from './components/App';
import reducer from './reducer';

import {
  ADD_TASK
} from './constants';

const logger = createLogger({
  // Transform Immutable objects into JSON
  stateTransformer: (state) => {
    return state.toJS();
  }
});

const store = createStore(reducer, applyMiddleware(logger));

export default class ToDoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}