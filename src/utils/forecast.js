const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f5fa503f1c9c63a3b69f570aa894f877&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      // const body = response.body;
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out and it feels like " +
          body.current.feelslike +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
