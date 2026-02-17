import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

function storyUrl(storyId: string): string {
  return `/iframe.html?id=${storyId}&viewMode=story`;
}

async function expectNoAxeViolations(page: Page, includeSelector?: string): Promise<void> {
  let builder = new AxeBuilder({ page }).disableRules(["page-has-heading-one", "region"]);

  if (includeSelector) {
    builder = builder.include(includeSelector);
  }

  const results = await builder.analyze();
  expect(results.violations).toEqual([]);
}

test("modal closes on Escape and restores trigger focus", async function run({ page }) {
  const openButton = page.getByRole("button", { name: "Open modal" });
  const closeButton = page.getByRole("button", { name: "Close" });

  await page.goto(storyUrl("organisms-modal--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog", { name: "Confirm release" })).toBeVisible();
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await page.keyboard.down("Shift");
  await page.keyboard.press("Tab");
  await page.keyboard.up("Shift");
  await expect(closeButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Confirm release" })).toBeHidden();
  await expect(openButton).toBeFocused();
});

test("modal dialog has no axe violations", async function run({ page }) {
  await page.goto(storyUrl("organisms-modal--showcase"));
  await page.getByRole("button", { name: "Open modal" }).click();
  await expect(page.getByRole("dialog", { name: "Confirm release" })).toBeVisible();
  await expectNoAxeViolations(page, "[role='dialog']");
});

test("drawer closes on Escape in viewport mode and outside click in container mode", async function run({ page }) {
  const modeSelectTrigger = page.getByRole("button", { name: "viewport" });
  const openButton = page.getByRole("button", { name: "Open drawer" });

  await page.goto(storyUrl("organisms-drawer--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();

  await modeSelectTrigger.click();
  await page.getByRole("option", { name: "container" }).click();
  await openButton.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.mouse.click(4, 4);
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("sheet closes on Escape in viewport mode and outside click in container mode", async function run({ page }) {
  const modeSelectTrigger = page.getByRole("button", { name: "viewport" });
  const openButton = page.getByRole("button", { name: "Open sheet" });

  await page.goto(storyUrl("organisms-sheet--showcase"));
  await openButton.click();
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeHidden();

  await modeSelectTrigger.click();
  await page.getByRole("option", { name: "container" }).click();
  await openButton.click();
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeVisible();
  await page.mouse.click(4, 4);
  await expect(page.getByRole("dialog", { name: "Quick settings" })).toBeHidden();
});

test("sheet viewport mode keeps full-height side panel", async function run({ page }) {
  await page.goto(storyUrl("organisms-sheet--showcase"));
  await page.getByRole("button", { name: "Open sheet" }).click();
  const dialog = page.getByRole("dialog", { name: "Quick settings" });
  await expect(dialog).toBeVisible();

  const panelBox = await dialog.boundingBox();
  expect(panelBox).not.toBeNull();
  if (!panelBox) {
    return;
  }

  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  if (!viewport) {
    return;
  }

  expect(panelBox.y).toBeLessThanOrEqual(1);
  expect(panelBox.height).toBeGreaterThan(viewport.height * 0.9);
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
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Create new automation" })).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(commandInput).toBeHidden();
});

test("command palette dialog has no axe violations", async function run({ page }) {
  await page.goto(storyUrl("organisms-commandpalette--showcase"));
  await page.getByRole("button", { name: "Open command palette" }).click();
  await expect(page.getByRole("textbox", { name: "Type a command..." })).toBeVisible();
  await expectNoAxeViolations(page, "[role='dialog']");
});

test("select supports keyboard navigation", async function run({ page }) {
  const firstSelectTrigger = page.locator("button[aria-haspopup='listbox']").first();
  const listbox = page.getByRole("listbox");

  await page.goto(storyUrl("atoms-select--showcase"));
  await firstSelectTrigger.focus();
  await page.keyboard.press("Enter");
  await expect(listbox).toBeVisible();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(firstSelectTrigger).toHaveText("Enterprise");
});
