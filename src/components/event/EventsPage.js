import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventsActions from '../../actions/eventActions';

class EventsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.eventsActions.getEvents();
  }

  render() {
    const events = this.props.events.map(event => {
      return <p>{event.name}</p>
    });

    return (<div>
      {events}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    eventsActions: bindActionCreators(eventsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
