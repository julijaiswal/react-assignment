import express from "express";
import { userLogin } from "../controllers/loginController";
import { userRegister } from "../controllers/registerController";
import {
  createEvent,
  listEvent,
  editEvent,
  deleteEvent,
} from "../controllers/eventController";

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/createEvent/:userId", createEvent);
router.get("/listEvent/:userId", listEvent);
router.get("/deleteEvent/:id", deleteEvent);
router.post("/editEvent/:userId", editEvent);

export default router;
