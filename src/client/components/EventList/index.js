import React, { useEffect } from "react";
import { Table, Th, Td, TableRow, Container } from "./EventList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, editEvent, fetchEvent } from "../../redux/actions";

const EventList = ({ userId }) => {
  const dispatch = useDispatch();
  const { eventData = [] } = useSelector((state) => state.event);

  useEffect(() => {
    userId && dispatch(fetchEvent(userId));
  }, [dispatch, userId]);

  const handleEdit = (id) => {
    dispatch(editEvent(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <Container>
      <h1>Event List</h1>
      <Table>
        <thead>
          <TableRow>
            <Th>Event Name</Th>
            <Th>Event Date</Th>
            <Th>Event Description</Th>
            <Th>Base Price</Th>
            <Th>Booking Type</Th>
            <Th>Action</Th>
          </TableRow>
        </thead>
        <tbody>
          {eventData?.map((event) => (
            <TableRow key={event.id}>
              <Td>{event.eventName}</Td>
              <Td>{event.eventDate}</Td>
              <Td>{event.eventDescription}</Td>
              <Td>{event.price}</Td>
              <Td>{event.bookingType}</Td>
              <Td>
                <button type="button" onClick={() => handleEdit(event.id)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(event.id)}>
                  Delete
                </button>
              </Td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EventList;
