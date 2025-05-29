import moment from "moment";

export function getCurrentTime(): string {
  return moment().format("DD-MM-YYYY HH:mm:ss");
}

export function generateToolListHTML(tools: string[]): string {
  return tools.map((tool) => `<li class="tool">${tool}</li> <br />`).join("");
}
