import { newE2EPage } from "@stencil/core/testing";

describe("mi-button", () => {
  it("renders mi-button", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-button></mi-button>");
    const element = await page.find("mi-button");
    expect(element).toHaveClass("hydrated");
  });

  it("renders mi-button with outline class when outline prop is present", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-button outline></mi-button>");
    const btnEl = await page.find("mi-button >>> button");
    expect(btnEl).toHaveClasses(["btn", "outline"]);
  });
});
