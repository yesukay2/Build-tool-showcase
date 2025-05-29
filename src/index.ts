import { getCurrentTime, generateToolListHTML } from "./utils";
import tools from "./tools.json";
import "./index.scss";

const dateContainer: HTMLElement = document.querySelector("time")!;
const mainContainer: HTMLElement = document.querySelector("main")!;
const buttonImage: HTMLImageElement = document.querySelector("button img")!;

buttonImage.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  buttonImage.src =
    document.body.classList.contains("dark") ?
      "https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Light-Mode-interface-linear-outline-icons-papa-vector.png"
    : "https://img.icons8.com/sf-ultralight-filled/25/moon-symbol.png";

  buttonImage.width = 30;
  buttonImage.height = 30;
});

setInterval(() => {
  dateContainer.innerHTML = getCurrentTime();
}, 1000);

mainContainer.innerHTML = generateToolListHTML(tools.tools);
