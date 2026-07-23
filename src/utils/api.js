async function fetchAPI(
  location,
  startDate = getStartDate(),
  endDate = getEndDate(),
) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}/?key=ML7JUNL7VAU72GL4LKF5VBPN5`,
  );

  return response;
}

async function parseAPI(rawData) {
  try {
    const weatherData = await rawData.json();
    const temps = [];

    for (let i = 0; i < weatherData.days.length; i++) {
      temps[i] = weatherData.days[i].temp;
    }

    return temps;
  } catch (err) {
    console.log(err);
  }
}

function getStartDate() {
  return new Date().toLocaleDateString("en-CA");
}

function getEndDate() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);

  return futureDate.toLocaleDateString("en-CA");
}

export default async function APIController(location) {
  const response = await fetchAPI(location);
  const data = await parseAPI(response);

  console.log(data);
}
