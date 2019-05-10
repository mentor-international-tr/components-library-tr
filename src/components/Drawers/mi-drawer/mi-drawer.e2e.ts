import { newE2EPage } from "@stencil/core/testing";

describe("mi-drawer", () => {
  it("renders mi-drawer", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-drawer></mi-drawer>");
    const element = await page.find("mi-drawer");
    expect(element).toHaveClass("hydrated");
  });
  it("when calling the open() method, it makes the drawer visible", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-drawer></mi-drawer>");

    let asideEl = await page.find("mi-drawer >>> aside.drawer");
    expect(asideEl).toHaveClass("hide");

    const miDrawer = await page.find("mi-drawer");
    await miDrawer.callMethod("open");

    asideEl = await page.find("mi-drawer >>> aside.drawer");
    expect(asideEl).not.toHaveClass("hide");
  });
  it("when calling the close() method, it makes the drawer close", async () => {
    const page = await newE2EPage();
    await page.setContent("<mi-drawer visible></mi-drawer>");

    let asideEl = await page.find("mi-drawer >>> aside.drawer");
    expect(asideEl).not.toHaveClass("hide");

    const miDrawer = await page.find("mi-drawer");
    await miDrawer.callMethod("close");

    asideEl = await page.find("mi-drawer >>> aside.drawer");
    expect(asideEl).toHaveClass("hide");
  });
});
