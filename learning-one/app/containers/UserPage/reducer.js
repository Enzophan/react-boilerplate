/*
 *
 * UserPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURE_EVENTS,
  LOAD_FEATURE_EVENTS_SUCCESS,
  LOAD_FEATURE_EVENTS_ERROR
} from './constants';

export const initialState = {
  featuredEvents: [],
  events: [],
  loading: false,
  error: false,
  loadingFeatured: false,
  errorFeatured: false,
};

/* eslint-disable default-case, no-param-reassign */
const userPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_EVENTS:
        return {
          ...state,
          loading: true,
          error: false
        }
      case LOAD_EVENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          events: action.events
        }
      case LOAD_EVENTS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
        }
      case LOAD_FEATURE_EVENTS:
        return {
          ...state,
          loadingFeatured: true,
          errorFeatured: false
        }
      case LOAD_FEATURE_EVENTS_SUCCESS:
        return {
          ...state,
          loadingFeatured: false,
          errorFeatured: false,
          featuredEvents: action.featuredEvents
        }
      case LOAD_EVENTS_ERROR:
        return {
          ...state,
          loadingFeatured: false,
          errorFeatured: action.error
        }
      default:
        return state;
    }
  });

export default userPageReducer;
