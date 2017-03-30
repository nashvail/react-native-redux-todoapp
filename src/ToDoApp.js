import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { 
  STORAGE_TASKS,
  LOAD_TASKS_FROM_STORAGE 
} from './constants';

import App from './components/App';
import reducer from './reducer';

const logger = createLogger({
  // Transform Immutable objects into JSON
  stateTransformer: (state) => {
    return state.toJS();
  }
});

const store = createStore(reducer, applyMiddleware(logger));

export default class ToDoApp extends Component {
  async componentWillMount() {
    // Load data into store from AsyncStorage
    try {
      const data = await AsyncStorage.getItem(STORAGE_TASKS);
      if (data !== null) {
        store.dispatch({
          type: LOAD_TASKS_FROM_STORAGE,
          data
        })
      }
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}