import { expect, test } from "@playwright/test";

test("homepage communicates the project and its independent status", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /a fan project\. built to do more\./i,
    }),
  ).toBeVisible();

  await expect(
    page.getByText(/unofficial carterpcs fan project/i),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /inspect the source/i }),
  ).toHaveAttribute(
    "href",
    "https://github.com/JoeBuildsThings/carter-exe",
  );
});

test("the main project sections are present and reachable", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("#build")).toBeVisible();
  await expect(page.locator("#approach")).toBeVisible();

  await expect(
    page.getByRole("link", { name: /explore the build/i }),
  ).toHaveAttribute("href", "#build");
});

test("mobile layout keeps navigation visible without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));

  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});
