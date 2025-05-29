import moment from "moment";
import "./styles/main.scss";
import tools from "./tools.json";

const dateContainer: HTMLElement = document.querySelector("time")!;
const mainContainer: HTMLElement = document.querySelector("main")!;

setInterval(() => {
  dateContainer.innerHTML = moment().format("DD-MM-YYYY HH:mm:ss");
}, 1000);

mainContainer.innerHTML = `${tools.tools
  .map((tool: string) => {
    return `<li>${tool}</li>`;
  })
  .join("")}`;

console.log(tools.tools);
