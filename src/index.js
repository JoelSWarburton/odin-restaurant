
import "./style.css";
import { homePage } from "./home";
import { aboutPage } from "./about";
import { menuPage } from "./menu";



document.querySelector("#home-btn").addEventListener("click", () => homePage());
document.querySelector("#about-btn").addEventListener("click", () => aboutPage());
document.querySelector("#menu-btn").addEventListener("click", () => menuPage());

homePage();