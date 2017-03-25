import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SegmentedControlIOS } from 'react-native';

import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETE
} from '../constants';

import { changeFilter } from '../action_creators';

const filters = ['All', 'Active', 'Complete'];

// Indices of filter in the segmented control
const ALL = 0,
  ACTIVE = 1,
  COMPLETE = 2;

export const FilterControl = ({
  onFilterChange
}) => (
    <SegmentedControlIOS
      values={filters}
      selectedIndex={0}
      onChange={event => {
        onFilterChange(event.nativeEvent.selectedSegmentIndex);
      }}
    />
  );

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filterIndex) => {
    switch (filterIndex) {
      case ALL:
        dispatch(changeFilter(FILTER_ALL));
        break;
      case ACTIVE:
        dispatch(changeFilter(FILTER_ACTIVE));
        break;
      case COMPLETE:
        dispatch(changeFilter(FILTER_COMPLETE));
        break;
      default:
        dispatch(changeFilter(FILTER_ALL));
    }
  }
});

export const FilterControlContainer = connect(
  undefined,
  mapDispatchToProps
)(FilterControl);
