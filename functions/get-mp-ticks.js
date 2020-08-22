const axios = require("axios");

function getTickInfo(nameKey, prop, myArray){
  for (var i=0; i < myArray.length; i++) {
    if (myArray[i].routeId === nameKey && prop === "style") {
      return (myArray[i].leadStyle) ? myArray[i].leadStyle : myArray[i].style
    }
    if (myArray[i].routeId === nameKey && prop === "date") {
      return myArray[i].date
    }
  }
}

const simpleRating = {
  "5.6": "5.6",
  "5.7": "5.7",
  "5.7 PG13": "5.7",
  "5.7+": "5.7",
  "5.8": "5.8",
  "5.8 R": "5.8",
  "5.8+": "5.8",
  "5.8+ R": "5.8",
  "5.9-": "5.9",
  "5.9": "5.9",
  "5.9 R": "5.9",
  "5.9+": "5.9",
  "5.10-": "5.10a",
  "5.10": "5.10b",
  "5.10a": "5.10a",
  "5.10a/b": "5.10b",
  "5.10b": "5.10b",
  "5.10b PG13": "5.10b",
  "5.10b R": "5.10b",
  "5.10c": "5.10c",
  "5.10b/c": "5.10c",
  "5.10+": "5.10d",
  "5.10d": "5.10d",
  "5.11a": "5.11a",
  "5.11b": "5.11b",
  "V1": "V1",
  "V1+": "V1",
  "V1+ PG13": "V1",
  "V2": "V2",
  "V2+": "V2",
  "V3": "V3",
  "V3+": "V3",
  "V4": "V4",
  "V4+": "V4",
  "V5": "V5",
  "V5+": "V5",
  "V6": "V6",
  "V6+": "V6",
  "V7": "V7",
  "V7+": "V7"
}

exports.handler = async (event, context) => {
  const mpKey = process.env.MP_KEY
  try {
    const email = event.queryStringParameters.email || ""
    // If there is an Email, try to get the Mountain Project info for it
    if(email) {
      const [ticksResponse, userResponse] = await Promise.all([
        axios.get(`https://www.mountainproject.com/data/get-ticks?email=${email}&key=${mpKey}`),
        axios.get(`https://www.mountainproject.com/data/get-user?email=${email}&key=${mpKey}`)
      ])
      // If Mountain Project found the email, get the route information
      if(userResponse.data) {
        const routesResponse = await axios.get(`https://www.mountainproject.com/data/get-routes?routeIds=${ticksResponse.data.ticks.map(e => e.routeId).join(',')}&key=${mpKey}`)
        const routes = routesResponse.data.routes.map(i => {
          let style = getTickInfo(i.id, "style", ticksResponse.data.ticks);
          if(style === '') { style = 'Unknown'; }
          if(!simpleRating[i.rating]) { console.log(i.rating); }
          return {
            'route': i.name,
            'url': i.url,
            'type': i.type,
            'rating': simpleRating[i.rating],
            'style': style,
            'date': getTickInfo(i.id, "date", ticksResponse.data.ticks)
          };
        });
        return { statusCode: 200,
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          //   'Access-Control-Allow-Headers':
          //   'Origin, X-Requested-With, Content-Type, Accept',
          // },
          body: JSON.stringify({ name: userResponse.data.name, routes: routes }) }
      } else {
        return { statusCode: 500, body: JSON.stringify({ error: 'Mountain Project E-mail not found'}) }
      }
    } else {
      return { statusCode: 500, body: JSON.stringify({ error: 'Mountain Project E-mail not specified'}) }
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
