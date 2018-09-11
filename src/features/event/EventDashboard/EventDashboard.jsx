import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const mapStateToProps = state => ({
  events: state.events,
  loading: state.async.loading
});

const mapDispatchToActions = {
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvents = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvents={this.handleDeleteEvents} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(EventDashboard);
