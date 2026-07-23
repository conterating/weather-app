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
    const days = weatherData.days;

    const dates = days.map((day) => {
      return new Date(day.datetime).toLocaleDateString();
    });

    const temps = days.map((day) => {
      return day.temp;
    });

    return { dates, temps };
  } catch (err) {
    return err;
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
  const { dates, temps } = await parseAPI(response);

  return { dates, temps };
}
