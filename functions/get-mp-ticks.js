exports.handler = async (event, context, callback) => {
  const MP_KEY = process.env
  try {
    const email = event.queryStringParameters.email || "World"
    return { statusCode: 200, body: JSON.stringify({ msg: `Hello ${email}` }) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}