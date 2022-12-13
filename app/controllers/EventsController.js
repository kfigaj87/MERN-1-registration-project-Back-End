const { request } = require("express");

module.exports = {
  index: (req, res, next) => {
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
  },

  create: (req, res, next) => {
    const event = req.body;
    res.end(JSON.stringify(event));
  },
  delete: (req, res, next) => {
    res.send("delete");
  },
};
