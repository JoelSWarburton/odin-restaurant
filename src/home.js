import pizzaLogo from "./pizza-logo.png";

function homePage() {
  let content = document.querySelector("#content");
  content.textContent = "";

  let title = document.createElement("h1");
  title.id = "page-title";
  title.textContent = "Papa Joel's Pizza";

  let logo = document.createElement("img");
  logo.src = pizzaLogo;
  logo.id = "logo-img";

  let subtitle = document.createElement("p");
  subtitle.id = "subtitle";
  subtitle.textContent = "The best pizza in the world!";

  let titleCard = document.createElement("div");
  titleCard.id = "title-card";

  content.append(titleCard);
  titleCard.append(title, logo, subtitle);
}

export { homePage };
