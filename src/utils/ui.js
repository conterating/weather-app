export default function render(dates, temps) {
  for (let i = 0; i < dates.length; i++) {
    const container = document.querySelector(".display-weather");
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("h3");
    header.textContent = dates[i];

    const para = document.createElement("p");
    para.textContent = temps[i];

    card.append(header, para);
    container.append(card);
  }
}
