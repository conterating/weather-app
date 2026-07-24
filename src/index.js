import APIController from "./utils/api.js";
import getLocation from "./utils/location.js";
import render from "./utils/ui.js";

const form = document.querySelector("form");

async function handleSubmission(event) {
  event.preventDefault();

  const location = getLocation();
  const { dates, temps } = await APIController(location);

  render(dates, temps);
}

form.addEventListener("submit", handleSubmission);
