const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const email = event.queryStringParameters.email || ""

    if(email) {
      const [ticksResponse, userResponse] = await Promise.all([
        axios.get(`https://www.mountainproject.com/data/get-ticks?email=${email}&key=${process.env.MP_KEY}`),
        axios.get(`https://www.mountainproject.com/data/get-user?email=${email}&key=${process.env.MP_KEY}`)
      ])
      if(userResponse.data) {
        return { statusCode: 200, body: JSON.stringify({ name: userResponse.data.name, ticks: ticksResponse.data }) }
      } else {
        return { statusCode: 500, body: JSON.stringify({ error: 'Email not found'}) }
      }
    } else {
      return { statusCode: 500, body: JSON.stringify({ error: 'Email not specified'}) }
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
