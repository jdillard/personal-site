const axios = require("axios");

exports.handler = async (event, context) => {
  const MP_KEY = process.env
  const email = event.queryStringParameters.email

  Promise.all([
    axios.get(`https://www.mountainproject.com/data/get-ticks?email=${email}&key=${MP_KEY}`),
    axios.get(`https://www.mountainproject.com/data/get-user?email=${email}&key=${MP_KEY}`)
  ]).then(([ticksResponse, userResponse]) => {
    return { statusCode: 200, body: JSON.stringify({ name: userResponse.data.name, ticks:  ticksResponse.data.ticks }) }
  }, (error) => {
    return { statusCode: 500, body: error }
  });
}
