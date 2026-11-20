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

test("support page explains the target machine and safe support options", async ({
  page,
}) => {
  await page.goto("/support");

  await expect(
    page.getByRole("heading", { name: /a better machine for the work ahead/i }),
  ).toBeVisible();

  await expect(page.getByText(/Ryzen 5 PRO 5650U/i)).toBeVisible();
  await expect(page.getByText(/16GB soldered DDR4-3200/i)).toBeVisible();
  await expect(page.getByText(/no payment form/i)).toBeVisible();
  await expect(
    page.getByRole("link", { name: /official specification record/i }),
  ).toHaveAttribute(
    "href",
    "https://psref.lenovo.com/Detail/ThinkPad_T14_Gen_2_AMD?M=20XK00BGUS",
  );
});

test("hire page remains separate from workstation support", async ({ page }) => {
  await page.goto("/hire");

  await expect(
    page.getByRole("heading", { name: /web products built to do a job/i }),
  ).toBeVisible();

  await expect(page.getByText(/paid project enquiries/i)).toBeVisible();
  await expect(
    page.getByRole("link", { name: /inspect this project/i }),
  ).toHaveAttribute(
    "href",
    "https://github.com/JoeBuildsThings/carter-exe",
  );

  await expect(page.getByRole("link", { name: "Support" })).toHaveAttribute(
    "href",
    "/support",
  );
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
