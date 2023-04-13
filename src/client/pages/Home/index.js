import React, { useEffect } from "react";
import EventForm from "../../components/EventForm";
import EventList from "../../components/EventList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    isLoggedIn,
    response: { id },
  } = useSelector((state) => state.login);
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <EventForm />
      <EventList userId={id} />
    </>
  );
};

export default Home;
