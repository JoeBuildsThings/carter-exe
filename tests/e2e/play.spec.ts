import { expect, test } from "@playwright/test";

test("visitors can choose between both accurately named creator editions", async ({ page }) => {
  await page.goto("/play");

  await expect(
    page.getByRole("heading", { name: /pick your player/i }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /play the carterpcs edition/i }),
  ).toHaveAttribute("href", "/play/carterpcs/");

  await expect(
    page.getByRole("link", { name: /play the kayjayohpcs edition/i }),
  ).toHaveAttribute("href", "/play/kayjayohpcs/");

  await expect(page.getByText(/Tech Quickfire/i)).toBeVisible();
  await expect(page.getByText(/Odd Build Lab/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /creator background \/ micro center/i }).first()).toHaveAttribute("href", /microcenter\.com/);

  await expect(
    page.getByRole("link", { name: /public profile: @kayjayohpcs/i }),
  ).toHaveAttribute("href", "https://www.tiktok.com/@kayjayohpcs");
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
    await page
      .getByRole("button", { name: new RegExp(correctPicks[index].replace(/[()]/g, "\\$&"), "i") })
      .click();

    await page
      .getByRole("button", {
        name: index === correctPicks.length - 1 ? /see your result/i : /continue/i,
      })
      .click();
  }

  await expect(
    page.getByRole("heading", { name: /the bench is ready/i }),
  ).toBeVisible();

  await expect(page.getByRole("button", { name: /share result/i })).toBeVisible();

  await page.getByRole("button", { name: /open the letter/i }).click();

  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /a note from joseph/i }),
  ).toBeVisible();
  await expect(
    page.getByText(/refurbished lenovo thinkpad t14 gen 2 amd/i),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /review the laptop details/i }),
  ).toHaveAttribute("href", "/support/");
});

test("a lost KayJayOhPCs run can still open the letter", async ({ page }) => {
  await page.goto("/play/kayjayohpcs/");

  await expect(
    page.getByRole("heading", { name: /kayjayohpcs challenge/i }),
  ).toBeVisible();

  await expect(page.getByRole("heading", { name: /Odd Build Lab/i })).toBeVisible();
  await page.getByRole("button", { name: /start the challenge/i }).click();

  await expect(page.getByRole("heading", { name: /A gaming PC is going inside a car tire/i })).toBeVisible();

  const wrongPicks = [
    "Seal every opening to keep dust out",
    "Only the radiator's advertised length",
    "Only the GPU's display outputs",
  ];

  for (let index = 0; index < wrongPicks.length; index += 1) {
    await page
      .getByRole("button", { name: new RegExp(wrongPicks[index], "i") })
      .click();

    await page
      .getByRole("button", {
        name: index === wrongPicks.length - 1 ? /see your result/i : /continue/i,
      })
      .click();
  }

  await expect(
    page.getByRole("heading", { name: /the bench needs another run/i }),
  ).toBeVisible();

  await page.getByRole("button", { name: /open the letter/i }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
});
