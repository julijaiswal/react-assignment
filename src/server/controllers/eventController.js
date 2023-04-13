import HTTPErrors from "http-errors";
import { readDatabase } from "../utils/readDb";
import { writeDatabase } from "../utils/writeDb";
const { v4: uuidv4 } = require("uuid");

// {
//     "id": 2,
//     "userId": 1,
//     "eventName": "Event 2",
//     "eventDate": "2023-06-01",
//     "eventDescription": "Lorem ipsum dolor sit amet",
//     "basePrice": 150,
//     "bookingType": "premium"
//   }
export const createEvent = async (req, res) => {
  try {
    let data = readDatabase();
    const { userId } = req.params;
    const payload = {
      id: uuidv4(),
      userId,
      ...req.body,
    };
    data.events = [...data.events, payload];
    await writeDatabase(data);
    return res.status(200).json({
      status: 200,
      message: "Event Created Successfully!!",
      data: payload,
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.json(HTTPErrors.BadRequest);
  }
};

export const listEvent = async (req, res) => {
  try {
    let data = readDatabase();
    const { userId } = req.params;
    const response = data.events.filter((elem) => elem.userId === userId);
    return res.status(200).json({
      status: 200,
      message: "Event List Fetched Successfully!!",
      data: response,
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.json(HTTPErrors.BadRequest);
  }
};

export const deleteEvent = async (req, res) => {
  try {
    let data = readDatabase();
    const { id } = req.params;
    const response = data.events.filter((elem) => elem.id !== id);
    await writeDatabase({
      ...data,
      events: response,
    });
    return res.status(200).json({
      status: 200,
      message: "Event Deleted Successfully!!",
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.json(HTTPErrors.BadRequest);
  }
};

export const editEvent = async (req, res) => {
  try {
    let data = readDatabase();
    const { id } = req.body;
    const response = data.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          ...req.body,
        };
      }
      return elem;
    });
    await writeDatabase(response);
    return res.status(200).json({
      status: 200,
      message: "Event Edited Successfully!!",
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.json(HTTPErrors.BadRequest);
  }
};
