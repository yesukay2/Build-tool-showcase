import { getCurrentTime, generateToolListHTML } from "../utils";

describe("getCurrentTime", () => {
  it("should return current date and time in the correct format", () => {
    const result = getCurrentTime();
    expect(result).toMatch(/\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}/);
  });
});

describe("generateToolListHTML", () => {
  it("should return HTML string with tools in list items", () => {
    const tools = ["Webpack", "Babel"];
    const html = generateToolListHTML(tools);
    expect(html).toBe(
      '<li class="tool">Webpack</li> <br /><li class="tool">Babel</li> <br />'
    );
  });

  it("should return empty string for empty input", () => {
    expect(generateToolListHTML([])).toBe("");
  });
});
