import { expect, test } from "@playwright/test";

test.describe("demo smoke", () => {
  test("react demo renders main controls", async ({ page }) => {
    await page.goto("/demos/react-demo/index.html");

    await expect(page.getByText("docsjs-editor React Demo")).toBeVisible();
    await expect(page.locator("textarea")).toBeVisible();
    const selector = page.getByRole("combobox").first();
    await expect(selector).toBeVisible();
    await expect(selector.locator("option")).toHaveCount(2);
    await expect(page.getByRole("button", { name: "Apply Snapshot" })).toBeVisible();
  });

  test("vue demo renders main controls", async ({ page }) => {
    await page.goto("/demos/vue-demo/index.html");

    await expect(page.getByText("docsjs-editor Vue Demo")).toBeVisible();
    await expect(page.locator("textarea")).toBeVisible();
    const selector = page.getByRole("combobox").first();
    await expect(selector).toBeVisible();
    await expect(selector.locator("option")).toHaveCount(2);
    await expect(page.getByRole("button", { name: "Apply Snapshot" })).toBeVisible();
  });
});
