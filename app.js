const config = require("./config");

const express = require("express");
const cors = require("cors");

const eventsRoutes = require("./app/routes/EventsRouts")();
app.use("/events", eventsRoutes);

const app = express();
app.use(cors());

app.listen(config.app.port, () => {
  console.log("Express server is up! Happy hacking :)");
});
