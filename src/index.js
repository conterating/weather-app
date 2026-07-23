import APIController from "./utils/api.js";
import getLocation from "./utils/location.js";

const form = document.querySelector("form");

async function handleSubmission(event) {
  event.preventDefault();

  const location = getLocation();
  const { dates, temps } = await APIController(location);

  console.log(dates);
  console.log(temps);
}

form.addEventListener("submit", handleSubmission);
