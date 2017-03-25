import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

import { Map, List, fromJS } from 'immutable';
import * as matchers from 'jest-immutable-matchers';

import reducer from '../src/reducer';
import { addTask } from '../src/action_creators';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('reducer', () => {

  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  it('returns same state when no action is passed', () => {
    const state = fromJS({
      tasks: [
        {
          id: 0,
          text: 'Do something',
          completed: false
        }
      ]
    });

    const newState = reducer(state);
    expect(newState).toEqualImmutable(fromJS({
      tasks: [
        {
          id: 0,
          text: 'Do something',
          completed: false
        }
      ]
    }));
  });

  it('handles ADD_TASK when state is empty', () => {

    const state = undefined;
    const action = {type: 'ADD_TASK', task: {
      text: 'Hello world',
      complete: false
    }};

    const newState = reducer(state, action);

    expect(newState).toEqualImmutable(Map({
      tasks: List([
        Map({
          id: 0,
          text: "Hello world",
          complete: false
        })
      ])
    }));

  });

  it('handles ADD_TASK', () => {

    const state = fromJS({
      tasks: [
        {
          id: 0,
          text: 'Hello world',
          complete: false
        }
      ]
    });

    const action = {type: 'ADD_TASK', task: {
      text: 'Do Something',
      complete: false
    }};

    const newState = reducer(state, action);

    expect(newState).toEqualImmutable(fromJS({
      tasks: [
        {
          id: 0,
          text: 'Hello world',
          complete: false
        },
        {
          id: 1,
          text: 'Do Something',
          complete: false
        }
      ]
    }));
  });

  it('handles TOGGLE_TASK', () => {

    const state = fromJS({
      tasks: [
        {
          id: 0,
          text: 'Hello world',
          complete: true
        },
        {
          id: 1,
          text: 'Do Something',
          complete: false
        }
      ]
    });

    const action = {type: 'TOGGLE_TASK', id: 1};
    const newState = reducer(state, action);

    expect(newState).toEqualImmutable(fromJS({
      tasks: [
        {
          id: 0,
          text: 'Hello world',
          complete: true
        },
        {
          id: 1,
          text: 'Do Something',
          complete: true
        }
      ]
    }));

  });
});
