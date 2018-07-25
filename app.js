const request = require("request");
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch wheater for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

const encodedAddress = encodeURIComponent(argv.a);

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA3x4f15TetG8L97tXIGPRhyFEkSiZL0HM`,
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log("Unable to connect to Google servers.");
    } else if (body.status === "ZERO_RESULTS") {
      console.log("Unable to find that address.");
    } else if (body.status === "OK") {
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(
        `Latitude: ${body.results[0].geometry.location.lat}, Longitude: ${
          body.results[0].geometry.location.lng
        }`
      );
    }
  }
);
