import { expect, test } from "@playwright/test";

test.describe("demo smoke", () => {
  test("react demo supports apply-switch-read flow", async ({ page }) => {
    await page.goto("/demos/react-demo/index.html");

    await expect(page.getByText("docsjs-editor React Demo")).toBeVisible();
    const textarea = page.locator("textarea").first();
    await expect(textarea).toBeVisible();
    const selector = page.locator("#react-editor-select");
    await expect(selector).toBeVisible();
    await expect(selector.locator("option")).toHaveCount(2);
    const apply = page.getByRole("button", { name: "Apply Snapshot" });
    const read = page.getByRole("button", { name: "Read Active HTML" });
    await expect(apply).toBeVisible();
    await expect(read).toBeVisible();

    await textarea.fill("<h1>React Flow</h1><p>react-flow-marker</p>");
    await expect(textarea).toHaveValue(/react-flow-marker/);
    await apply.click();
    await selector.selectOption("ckeditor5");
    await read.click();

    await expect(page.locator("#react-output")).not.toHaveText("");
  });

  test("vue demo supports apply-switch-read flow", async ({ page }) => {
    await page.goto("/demos/vue-demo/index.html");

    await expect(page.getByText("docsjs-editor Vue Demo")).toBeVisible();
    const textarea = page.locator("textarea").first();
    await expect(textarea).toBeVisible();
    const selector = page.locator("#vue-editor-select");
    await expect(selector).toBeVisible();
    await expect(selector.locator("option")).toHaveCount(2);
    const apply = page.getByRole("button", { name: "Apply Snapshot" });
    const read = page.getByRole("button", { name: "Read Active HTML" });
    await expect(apply).toBeVisible();
    await expect(read).toBeVisible();

    await textarea.fill("<h1>Vue Flow</h1><p>vue-flow-marker</p>");
    await expect(textarea).toHaveValue(/vue-flow-marker/);
    await apply.click();
    await selector.selectOption("ckeditor5");
    await read.click();

    await expect(page.locator("#vue-output")).not.toHaveText("");
  });
});
