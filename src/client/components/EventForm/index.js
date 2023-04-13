import React, { useState } from "react";
import { validatePrice } from "../../utils";
import {
  Container,
  Form,
  Input,
  Textarea,
  Button,
  Label,
  RadioContainer,
  CheckboxContainer,
  CheckboxInput,
  RadioInput,
  Error,
} from "./EventForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../redux/actions";

const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bookingType, setBookingType] = useState("normal");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [eventNameError, setEventNameError] = useState("");
  const [eventDateError, setEventDateError] = useState("");
  const [priceError, setPriceError] = useState("");
  let isVaildationFailed = false;
  const dispatch = useDispatch();
  const { response: { id} } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    isVaildationFailed = false;
    // reset errors
    setEventNameError("");
    setEventDateError("");
    setPriceError("");

    // validate fields
    if (eventName.trim() === "") {
      setEventNameError("Event name is required");
      isVaildationFailed = true;
    }
    if (eventDate.trim() === "") {
      setEventDateError("Event date is required");
      isVaildationFailed = true;
    }
    if (!validatePrice(price)) {
      setPriceError("Price must be a valid number greater than 0");
      isVaildationFailed = true;
    }
    // if no errors, submit form
    if (!isVaildationFailed && termsAccepted) {
      const payload = {
        id,
        eventName,
        eventDate,
        eventDescription,
        price,
        bookingType,
      };
      dispatch(createEvent(payload));
    }
  };

  return (
    <Container>
      <h1>Create Event</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        {eventNameError && <Error>{eventNameError}</Error>}
        <Input
          type="date"
          placeholder="Event Date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        {eventDateError && <Error>{eventDateError}</Error>}

        <Textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {priceError && <Error>{priceError}</Error>}

        <RadioContainer>
          Booking Type:
          <Label>
            <RadioInput
              type="radio"
              name="bookingType"
              value="normal"
              checked={bookingType === "normal"}
              onChange={(event) => setBookingType(event.target.value)}
            ></RadioInput>
            Normal
          </Label>
          <Label>
            <RadioInput
              type="radio"
              name="bookingType"
              value="premium"
              checked={bookingType === "premium"}
              onChange={(event) => setBookingType(event.target.value)}
            ></RadioInput>
            Premium
          </Label>
        </RadioContainer>
        <CheckboxContainer>
          <CheckboxInput
            type="checkbox"
            checked={termsAccepted}
            onChange={(event) => setTermsAccepted(event.target.checked)}
          />
          I accept terms &amp; conditions
        </CheckboxContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default EventForm;
