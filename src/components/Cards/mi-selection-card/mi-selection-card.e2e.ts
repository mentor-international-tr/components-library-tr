import { newE2EPage } from "@stencil/core/testing";

describe("testing mi-selection-card", () => {
  it("should render mi-selection-card", async () => {
    const page = await newE2EPage();
    await page.setContent(`<mi-selection-card></mi-selection-card>`);
    const el = await page.find("mi-selection-card");
    expect(el).not.toBeNull();
  });
});
