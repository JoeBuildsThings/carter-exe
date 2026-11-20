import { expect, test } from "@playwright/test";

test("visitors can choose between both creator editions", async ({ page }) => {
  await page.goto("/play");

  await expect(
    page.getByRole("heading", { name: /pick your player/i }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /play the carterpcs edition/i }),
  ).toHaveAttribute("href", "/play/carterpcs/");

  await expect(
    page.getByRole("link", { name: /play the kayjahopc edition/i }),
  ).toHaveAttribute("href", "/play/kayjahopc/");
});

test("a winning run unlocks the letter", async ({ page }) => {
  await page.goto("/play/carterpcs/");

  await expect(
    page.getByRole("heading", { name: /carterpcs challenge/i }),
  ).toBeVisible();

  await page.getByRole("button", { name: /start the challenge/i }).click();

  const correctPicks = [
    "NVMe SSD",
    "Power supply capacity and condition",
    "DDR generation and motherboard support",
    "Graphics card (GPU)",
    "Cooler mounting and thermal contact",
    "Motherboard form factor and component clearance",
  ];

  for (let index = 0; index < correctPicks.length; index += 1) {
    await page.getByRole("button", { name: new RegExp(correctPicks[index], "i") }).click();

    await page
      .getByRole("button", {
        name: index === correctPicks.length - 1 ? /see your result/i : /continue/i,
      })
      .click();
  }

  await expect(
    page.getByRole("heading", { name: /the bench is ready/i }),
  ).toBeVisible();

  await page.getByRole("button", { name: /open the letter/i }).click();

  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /a note from joseph/i }),
  ).toBeVisible();
  await expect(page.getByText(/refurbished lenovo thinkpad t14 gen 2 amd/i)).toBeVisible();
  await expect(
    page.getByRole("link", { name: /review the laptop details/i }),
  ).toHaveAttribute("href", "/support/");
});

test("a lost run can still open the letter", async ({ page }) => {
  await page.goto("/play/kayjahopc/");

  await page.getByRole("button", { name: /start the challenge/i }).click();

  const wrongPicks = [
    "Mechanical hard drive",
    "Screen refresh rate",
    "Monitor resolution",
  ];

  for (const pick of wrongPicks) {
    await page.getByRole("button", { name: new RegExp(pick, "i") }).click();
    await page.getByRole("button", { name: /see your result/i }).click();
  }

  await expect(
    page.getByRole("heading", { name: /the bench needs another run/i }),
  ).toBeVisible();

  await page.getByRole("button", { name: /open the letter/i }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
});
