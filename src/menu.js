import pizza0 from "./images/pizza-0.jpg";
import pizza1 from "./images/pizza-1.jpg";
import pizza2 from "./images/pizza-2.jpg";
import pizza3 from "./images/pizza-3.jpg";
import pizza4 from "./images/pizza-4.jpg";
import pizza5 from "./images/pizza-5.jpg";

function menuPage() {
  let content = document.querySelector("#content");
  content.textContent = "";

  let pizzas = [[pizza0, "Margah"]];

  let title = document.createElement("h1");
  title.classList.add("page-title");
  title.textContent = "Pizza Menu";
  content.append(title);

  let menuCard = document.createElement("div");
  menuCard.classList.add("menu-card");

  let menuItems = [];
  for (let i = 0; i < 6; i++) {
    menuItems[i] = createMenuItem(i, images);
  }

  menuCard.append(menuItems[0]);
  content.append(menuCard);

  console.log(menuItems[0].children);
}

function createMenuItem(index, images) {
  let menuItem = document.createElement("div");
  let itemImg = document.createElement("img");
  itemImg.src = images[index];
  itemImg.id = "item-img-" + index;
  let itemName = document.createElement("p");
  menuItem.append(itemImg, itemName);
  return menuItem;
}

export { menuPage };
