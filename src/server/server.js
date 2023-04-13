import express from "express";
import compression from "compression";
import appRoutes from "./routes/appRoutes";
import bodyParser from "body-parser";
const cors = require("cors");

const SERVER_PORT = 6006;
const app = express();

app.use(compression());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:6006", "http://localhost:3000"],
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Cache-Control", "no-store");
  next();
});
app.use("/api", appRoutes);
app.listen(SERVER_PORT, () => {
  console.log(`server started on port ${SERVER_PORT}`);
});
