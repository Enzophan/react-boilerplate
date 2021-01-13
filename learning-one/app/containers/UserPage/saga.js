import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loadEventsSuccess, loadEventsError, loadFeaturedEventsSuccess, loadFeaturedEventsError } from './actions';
import request from 'utils/request';
import { LOAD_EVENTS, LOAD_FEATURE_EVENTS } from './constants';

import events from './mocks/Events';
import featuredEvents from './mocks/FeaturedEvents';


// export function* loadFeaturedEvents() {
//   // Call API
//   yield put(loadFeaturedEventsSuccess(featuredEvents));
// }

// export function* loadEvents() {
//   // console.log("Saga loadEvents ", events)
//   // yield put(loadEventsSuccess(events));

//   const requestURL = 'https://jsonplaceholder.typicode.com/posts';
//   try {
//     // Call our request helper (see 'utils/request')
//     const events = yield call(request, requestURL);
//     console.log("Saga loadEvents ", events)
//     yield put(loadEventsSuccess(events));
//   } catch (err) {
//     yield put(loadEventsError(err));
//   }
// }

function* fetchFeaturedEvents(action) {
  console.log("fetchFeaturedEvents ", action);
  try {
    yield put(loadFeaturedEventsSuccess(featuredEvents));
  } catch (error) {
    yield put(loadFeaturedEventsError(error));
  }
};


function* fetchEvents(action) {
  console.log("fetchEvents ", action);
  // try {
  //   yield put(loadEventsSuccess(events));
  // } catch (error) {
  //   yield put(loadEventsError(error));
  // }
  
  const requestURL = 'https://jsonplaceholder.typicode.com/posts';
  try {
    // Call our request helper (see 'utils/request')
    const events = yield call(request, requestURL);
    console.log("Saga loadEvents ", events)
    yield put(loadEventsSuccess(events));
  } catch (err) {
    yield put(loadEventsError(err));
  }
};


function* loadFeaturedEvents() {
  yield takeLatest(LOAD_FEATURE_EVENTS, fetchFeaturedEvents)
}

function* loadEvents() {
  yield takeLatest(LOAD_EVENTS, fetchEvents)
}


// Individual exports for testing
export default function* userPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadEvents(), loadFeaturedEvents()]);
}
