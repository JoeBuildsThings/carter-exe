import { expect, test } from "@playwright/test";

test("homepage presents an independent multi-creator arcade", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /pc culture goes playable/i }),
  ).toBeVisible();

  await expect(
    page.getByText(/independent pc creator arcade/i).first(),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /choose your creator/i }),
  ).toHaveAttribute("href", "/play/");

  await expect(
    page.getByRole("heading", { name: /choose your creator route/i }),
  ).toBeVisible();

  await expect(page.getByRole("heading", { name: "CarterPCs" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "KayJayOhPCs" })).toBeVisible();

  await expect(
    page.getByText(/no creator partnership or endorsement/i),
  ).toBeVisible();
});

test("navigation keeps creator selection, support and hiring separate", async ({ page }) => {
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Main navigation" });

  await expect(nav.getByRole("link", { name: "Creators" })).toHaveAttribute("href", "/play/");
  await expect(nav.getByRole("link", { name: "Laptop support" })).toHaveAttribute("href", "/support");
  await expect(nav.getByRole("link", { name: "Hire" })).toHaveAttribute("href", "/hire");
});

test("support page explains the target machine and safe support options", async ({ page }) => {
  await page.goto("/support/");

  await expect(
    page.getByRole("heading", { name: /a better machine for the work ahead/i }),
  ).toBeVisible();

  await expect(page.getByText(/Ryzen 5 PRO 5650U/i).first()).toBeVisible();
  await expect(page.getByText(/16GB soldered DDR4-3200/i)).toBeVisible();
  await expect(page.getByText(/there is no payment form/i)).toBeVisible();
  await expect(page.getByText(/any featured creator/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /not a project that exists only on paper/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /inspect source/i }).first()).toHaveAttribute("href", "https://github.com/JoeBuildsThings/NetRecon");
  await expect(page.getByRole("link", { name: /message me on linkedin/i })).toHaveAttribute("href", "https://www.linkedin.com/in/joseph-ayomide-adebiyi-5bb66844b/");
  await expect(page.getByRole("link", { name: /carterpcs team/i })).toHaveAttribute("href", /mailto:Carterpcs@rakugomedia\.com/);
  await expect(page.getByRole("link", { name: /kayjayohpcs/i })).toHaveAttribute("href", /mailto:kayjayohpcs@gmail\.com/);

  await expect(
    page.getByRole("link", { name: /official specification record/i }),
  ).toHaveAttribute(
    "href",
    "https://psref.lenovo.com/Detail/ThinkPad_T14_Gen_2_AMD?M=20XK00BGUS",
  );
});

test("hire page remains separate from creator support", async ({ page }) => {
  await page.goto("/hire/");

  await expect(
    page.getByRole("heading", { name: /web products built to do a job/i }),
  ).toBeVisible();

  await expect(page.getByText(/paid project enquiries/i)).toBeVisible();
});

test("mobile homepage has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));

  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});
