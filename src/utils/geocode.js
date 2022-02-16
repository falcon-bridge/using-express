const request = require("request");

const geocode = (address, callback) => {
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZmFsY29uYnJpZGdlIiwiYSI6ImNrem0zZW16MzB3aHgydXRhZncycHh1MjQifQ.Ycros4340_TG8-iBDqY7iA&limit=1`;

  request({ url: geocodeURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find location. Try again with different search term.",
        undefined
      );
    } else {
      // const body = response.body;
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const location = body.features[0].place_name;
      callback(undefined, { latitude, longitude, location });
    }
  });
};

module.exports = geocode;
