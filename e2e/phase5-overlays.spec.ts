import { expect, test } from "@playwright/test";

function storyUrl(storyId: string): string {
  return `/iframe.html?id=${storyId}&viewMode=story`;
}

test("modal closes on Escape and restores trigger focus", async function run({ page }) {
  const openButton = page.getByRole("button", { name: "Open modal" });

  await page.goto(storyUrl("organisms-modal--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog", { name: "Confirm release" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Confirm release" })).toBeHidden();
  await expect(openButton).toBeFocused();
});

test("drawer closes on Escape in viewport mode and outside click in container mode", async function run({ page }) {
  const modeSelect = page.getByRole("combobox");
  const openButton = page.getByRole("button", { name: "Open drawer" });

  await page.goto(storyUrl("organisms-drawer--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();

  await modeSelect.selectOption("container");
  await openButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.mouse.click(4, 4);
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("sheet closes on Escape in viewport mode and outside click in container mode", async function run({ page }) {
  const modeSelect = page.getByRole("combobox");
  const openButton = page.getByRole("button", { name: "Open sheet" });

  await page.goto(storyUrl("organisms-sheet--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeHidden();

  await modeSelect.selectOption("container");
  await openButton.click();
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeVisible();
  await page.mouse.click(4, 4);
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeHidden();
});

test("popover closes on outside click", async function run({ page }) {
  const openButton = page.getByRole("button", { name: "Open popover" });

  await page.goto(storyUrl("organisms-popover--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();

  await page.mouse.click(4, 4);
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("command palette opens, focuses input, and closes on Escape", async function run({ page }) {
  const openButton = page.getByRole("button", { name: "Open command palette" });
  const commandInput = page.getByRole("textbox", { name: "Type a command..." });

  await page.goto(storyUrl("organisms-commandpalette--showcase"));
  await openButton.click();
  await expect(commandInput).toBeVisible();
  await expect(commandInput).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(commandInput).toBeHidden();
});

test("select supports keyboard navigation", async function run({ page }) {
  const firstSelect = page.getByRole("combobox").first();

  await page.goto(storyUrl("atoms-select--showcase"));
  await firstSelect.focus();
  await page.keyboard.press("ArrowDown");
  await expect(firstSelect).toHaveValue("enterprise");
});
