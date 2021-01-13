/*
 *
 * UserPage actions
 *
 */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
  LOAD_FEATURE_EVENTS,
  LOAD_FEATURE_EVENTS_SUCCESS,
  LOAD_FEATURE_EVENTS_ERROR
} from './constants';

export function loadEvents(tenantId, skip, take, searchTerm) {

  return {
    type: LOAD_EVENTS,
    tenantId,
    skip,
    take,
    searchTerm
  };
}


export function loadEventsSuccess(events) {
  console.log("In Load Event Success action: ", events);

  return {
    type: LOAD_EVENTS_SUCCESS,
    events
  };
}

export function loadEventsError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error
  };
}

export function loadFeaturedEvents(tenantId, skip, take) {
  return {
    type: LOAD_FEATURE_EVENTS,
    tenantId,
    skip,
    take
  };
}


export function loadFeaturedEventsSuccess(featuredEvents) {
  return {
    type: LOAD_FEATURE_EVENTS_SUCCESS,
    featuredEvents
  };
}

export function loadFeaturedEventsError(error) {
  return {
    type: LOAD_FEATURE_EVENTS_ERROR,
    error
  };
}