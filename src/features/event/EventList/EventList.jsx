import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvents } = this.props;
    return (
      <div>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvents={deleteEvents}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
