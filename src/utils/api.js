async function fetchAPI(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=ML7JUNL7VAU72GL4LKF5VBPN5`,
  );

  return response;
}

async function parseAPI(rawData) {
  try {
    const weatherData = await rawData.json();
    console.log(weatherData);
    return weatherData.currentConditions.temp;
  } catch (err) {
    return "Please enter a valid location!";
  }
}

export default async function APIController(location) {
  const response = await fetchAPI(location);
  const temperature = await parseAPI(response);

  return temperature;
}
