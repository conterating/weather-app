function renderDay(date, temp) {
  const container = document.querySelector(".display-weather");
  const card = document.createElement("div");
  card.classList.add("card");

  const header = document.createElement("h3");
  header.textContent = date;

  const para = document.createElement("p");
  para.textContent = temp;

  card.append(header, para);
  container.append(card);
}
