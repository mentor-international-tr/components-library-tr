import { newE2EPage } from "@stencil/core/testing";

describe("testing mi-selection-card", () => {
  it("should render mi-selection-card", async () => {
    const page = await newE2EPage();
    await page.setContent(`<mi-selection-card></mi-selection-card>`);
    const el = await page.find("mi-selection-card");
    expect(el).not.toBeNull();
  });

  it("should render description element if description prop exists", async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<mi-selection-card description = "I\'m a teacher"></mi-selection-card>',
    );
    const descriptionEl = await page.find(
      "mi-selection-card >>> .description-test",
    );
    expect(descriptionEl.textContent).toBe("I'm a teacher");
  });

  it("should render extraInfo element if extraInfo prop exists", async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<mi-selection-card extra-info = "teacher, mentor, etc..."></mi-selection-card>',
    );
    const extraInfoEl = await page.find(
      "mi-selection-card >>> .extraInfo-test",
    );
    expect(extraInfoEl.textContent).toBe("teacher, mentor, etc...");
  });
});
