const express = require("express");
const router = express.Router();

module.exports = () => {
  //GET /events
  router.get("/", (req, res, next) => {
    res.json({
      events: [
        {
          name: "Karol Figaj",
          event: { key: "front-end", val: "Front-end" },
          city: { key: "warsaw", val: "Warszawa" },
        },
        {
          name: "Łukasz Badocha",
          event: { key: "back-end", val: "Back-end" },
          city: { key: "cracow", val: "Kraków" },
        },
      ],
    });
  });

  return router;
};
