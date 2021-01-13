/**
 *
 * UserPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeFeaturedEventsSelector, makeEventsSelector } from './selectors';
import { loadEvents, loadFeaturedEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function UserPage({
  featuredEvents,
  events,
  loadEvents,
  loadFeaturedEvents
}) {

  useInjectReducer({ key: 'userPage', reducer });
  useInjectSaga({ key: 'userPage', saga });

  useEffect(() => {
    loadEvents('12122', 0, 15, '');
    loadFeaturedEvents('12122', 0, 5);
  }, []);

  console.log("featuredEvents ", featuredEvents)
  console.log("events ", events)

  return (
    <div>
      <Helmet>
        <title>UserPage</title>
        <meta name="description" content="Description of UserPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

UserPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  featuredEvents: PropTypes.array,
  events: PropTypes.array,
  tenant: PropTypes.object,
  loadEvents: PropTypes.func,
  loadFeaturedEvents: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  featuredEvents: makeFeaturedEventsSelector(),
  events: makeEventsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: (tenantId, skip, take, searchTerm) => dispatch(loadEvents(tenantId, skip, take, searchTerm)),
    loadFeaturedEvents: (tenantId, skip, take) => dispatch(loadFeaturedEvents(tenantId, skip, take)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserPage);
