import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Grid } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const mapStateToProps = state => ({
  events: state.events
});

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };
  handleCancel = () => {
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };
  handleDeleteEvents = eventId => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventOpen={this.handleOpenEvent}
            deleteEvents={this.handleDeleteEvents}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(EventDashboard);
