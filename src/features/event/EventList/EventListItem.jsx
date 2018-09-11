import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, deleteEvents } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {format(event.date, "dddd Do MMM")} at{" "}
            {format(event.date, "h:mm A")} |<Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              Object.values(event.attendees).map((attendee, index) => (
                <EventListAttendee attendee={attendee} key={index} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={deleteEvents(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            to={`/event/${event.id}`}
            as={Link}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
