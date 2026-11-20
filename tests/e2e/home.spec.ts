import { expect, test } from "@playwright/test";

test("homepage communicates the project and its independent status", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /a little more than a fan page/i }),
  ).toBeVisible();

  await expect(page.getByText(/independent fan project/i).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /view source/i })).toHaveAttribute(
    "href",
    "https://github.com/JoeBuildsThings/carter-exe",
  );
});

test("the core project sections are reachable from the homepage", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("#project")).toBeVisible();
  await expect(page.locator("#approach")).toBeVisible();
});
