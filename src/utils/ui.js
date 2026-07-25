export default function render(temp, container) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("card");

  const header = document.createElement("h3");
  header.classList.add("temp-header");
  header.textContent = temp;

  card.append(header);
  container.append(card);
}
