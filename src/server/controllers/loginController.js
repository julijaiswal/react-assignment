import HTTPErrors from "http-errors";
import { readDatabase } from "../utils/readDb";

export const userLogin = async (req, res) => {
  try {
    let data = readDatabase();
    const { email, password } = req.body;
    data.users.forEach((user) => {
      if (email === user.email && password === user.password) {
        return res.status(200).json({
          status: 200,
          message: "User Logged in successfully",
          id: user.id
        });
      }
    });
    return res.status(400).json({
      status: 400,
      message: "Email or Password entered is not correct, Please retry!!",
    });
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.json(HTTPErrors.BadRequest);
  }
};
