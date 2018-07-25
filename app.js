const request = require("request");

request(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=95%20seaman%20avenue%20new%20york",
    json: true
  },
  (error, response, body) => {
    console.log(body);
  }
);
