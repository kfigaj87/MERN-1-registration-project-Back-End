const config = require("./config");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// zapytać o kolejność dodawania kodu
const eventsRoutes = require("./app/routes/EventsRouts")();
app.use("/events", eventsRoutes);

app.listen(config.app.port, () => {
  console.log("Express server is up! Happy hacking :)");
});
