import APIController from "./utils/api.js";
import getLocation from "./utils/location.js";
import render from "./utils/ui.js";

const form = document.querySelector("form");
const container = document.querySelector(".display-weather");

async function handleSubmission(event) {
  event.preventDefault();

  const location = getLocation();
  const temp = await APIController(location);

  render(temp, container);

  form.reset();
}

form.addEventListener("submit", handleSubmission);
