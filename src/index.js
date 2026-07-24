import APIController from "./utils/api.js";
import getLocation from "./utils/location.js";
import render from "./utils/ui.js";
import convert from "./utils/conversion.js";

const form = document.querySelector("form");
const container = document.querySelector(".display-weather");
const toggleTemp = document.querySelector(".convert");

let currTemp;

async function handleSubmission(event) {
  event.preventDefault();

  const location = getLocation();
  const temp = await APIController(location);
  currTemp = temp;

  render(currTemp, container);
}

function convertTemp(event) {
  if (event.target.textContent == "C") {
    currTemp = ((currTemp - 32) * 5) / 9;
    event.target.textContent = "F";

    render(currTemp, container);
  } else if (event.target.textContent == "F") {
    currTemp = (currTemp * 9) / 5 + 32;
    event.target.textContent = "C";

    render(currTemp, container);
  }
}

form.addEventListener("submit", handleSubmission);
toggleTemp.addEventListener("click", convertTemp);
