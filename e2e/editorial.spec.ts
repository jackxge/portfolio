import { expect, test } from "../playwright-fixture";

const previewUrl = "http://127.0.0.1:8080/";

test("zen homepage keeps all six projects and case-study navigation", async ({ page }) => {
  await page.goto(previewUrl);

  await expect(page.getByRole("heading", { name: /I design interfaces for complex systems/i })).toBeVisible();
  await expect(page.locator('.zen-page a[href^="#/work/"]')).toHaveCount(6);

  await page.getByRole("link", { name: /Explore the project/i }).first().click();
  await expect(page).toHaveURL(/#\/work\/data-platform$/);
  await expect(page.getByRole("heading", { name: "Unified Enterprise Data Platform", exact: true })).toBeVisible();
});

test("mobile layout has no horizontal overflow and navigation reaches homepage sections", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(previewUrl);

  await expect(page.getByRole("heading", { name: /I design interfaces for complex systems/i })).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

  await page.getByRole("link", { name: "Work", exact: true }).click();
  await expect(page.locator("#work")).toBeVisible();
});
