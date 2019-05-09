import { newE2EPage } from "@stencil/core/testing";

describe("mi-circle-button", () => {
  it("renders mi-circle-button", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-circle-button></mi-circle-button>");
    const element = await page.find("mi-circle-button");
    expect(element).toHaveClass("hydrated");
  });
  it("mi-circle-button withX prop", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-circle-button with-x></mi-circle-button>");
    const btnEl = await page.find("mi-circle-button >>> button");
    expect(btnEl.textContent).toEqual("x");
  });
  it("mi-circle-button withPlus prop", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-circle-button with-plus></mi-circle-button>");
    const btnEl = await page.find("mi-circle-button >>> button");
    expect(btnEl.textContent).toEqual("+");
  });
});
