// import moment from "moment";
// import "./index.scss";
// import tools from "./tools.json";

// const dateContainer: HTMLElement = document.querySelector("time")!;
// const mainContainer: HTMLElement = document.querySelector("main")!;
// const buttonImage: HTMLImageElement = document.querySelector("button img")!;

// buttonImage.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     buttonImage.src =
//       "https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Light-Mode-interface-linear-outline-icons-papa-vector.png";
//     buttonImage.width = 30;
//     buttonImage.height = 30;
//   } else {
//     buttonImage.src =
//       "https://img.icons8.com/sf-ultralight-filled/25/moon-symbol.png";
//   }
// });

// setInterval(() => {
//   dateContainer.innerHTML = moment().format("DD-MM-YYYY HH:mm:ss");
// }, 1000);

// mainContainer.innerHTML = `${tools.tools
//   .map((tool: string) => {
//     return `<li class="tool">${tool}</li> <br />`;
//   })
//   .join("")}`;

// index.ts
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
