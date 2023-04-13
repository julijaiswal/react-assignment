import HTTPErrors from "http-errors";
import { readDatabase } from "../utils/readDb";
import { writeDatabase } from "../utils/writeDb";
const { v4: uuidv4 } = require("uuid");

export const userRegister = async (req, res) => {
  try {
    const payload = {
      id: uuidv4(),
      ...req.body,
    };
    let data = readDatabase();
    const { email, username } = req.body;
    data.users.forEach((user) => {
      if (email === user.email || username === user.username) {
        return res.status(400).json({
          status: 400,
          message: "Email and username already in use, Please login!!",
        });
      }
    });
    data.users = [...data.users, payload];
    await writeDatabase(data);
    return res.status(200).json({
      status: 200,
      message: "User Registered Successfully, Please login!!",
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.json(HTTPErrors.BadRequest);
  }
};
