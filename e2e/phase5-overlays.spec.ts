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
  const dialog = page.getByRole("dialog");

  await page.goto(storyUrl("organisms-drawer--showcase"));
  await openButton.click();
  await expect(dialog).toBeVisible();
  const viewportBox = await dialog.boundingBox();
  expect(viewportBox).not.toBeNull();
  if (!viewportBox) {
    return;
  }
  expect(viewportBox.width).toBeGreaterThan(240);
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();

  await modeSelectTrigger.click();
  await page.getByRole("option", { name: "container" }).click();
  await openButton.click();
  await expect(dialog).toBeVisible();
  await page.mouse.click(4, 4);
  await expect(dialog).toBeHidden();
});

test("sheet closes on Escape in viewport mode and outside click in container mode", async function run({ page }) {
  const modeSelectTrigger = page.locator("button[aria-haspopup='listbox']").first();
  const openButton = page.getByRole("button", { name: "Open sheet" });

  await page.goto(storyUrl("organisms-sheet--showcase"));
  await modeSelectTrigger.click();
  await page.getByRole("option", { name: "viewport" }).click();
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
  await page.locator("button[aria-haspopup='listbox']").first().click();
  await page.getByRole("option", { name: "viewport" }).click();
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

test("app shell remains usable on mobile viewport", async function run({ page }) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(storyUrl("organisms-appshell--showcase"));

  const hasHorizontalOverflow = await page.evaluate(function checkOverflow() {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
  });
  expect(hasHorizontalOverflow).toBeFalsy();

  const toggleButton = page.getByRole("button", { name: "Hide nav" });
  await toggleButton.click();
  await expect(page.getByRole("button", { name: "Show nav" })).toBeVisible();
  await page.getByRole("button", { name: "Show nav" }).click();
  await expect(page.getByText("Foundations")).toBeVisible();
});

test("workspace template neo mint story renders", async function run({ page }) {
  await page.goto(storyUrl("themes-workspace-template--neo-mint"));
  await expect(page.getByRole("heading", { name: "Create Automation" })).toBeVisible();

  const timeInput = page.locator("input[value='9:00 AM']").first();
  const timezoneSelect = page.locator("button[aria-haspopup='listbox']").first();
  const timeBox = await timeInput.boundingBox();
  const timezoneBox = await timezoneSelect.boundingBox();

  expect(timeBox).not.toBeNull();
  expect(timezoneBox).not.toBeNull();
  if (!timeBox || !timezoneBox) {
    return;
  }

  expect(Math.abs(timeBox.height - timezoneBox.height)).toBeLessThanOrEqual(1.5);
});

test("workspace template gallery avoids overlap and horizontal overflow", async function run({ page }) {
  await page.goto(storyUrl("themes-workspace-template--gallery"));

  const hasHorizontalOverflow = await page.evaluate(function checkOverflow() {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
  });
  expect(hasHorizontalOverflow).toBeFalsy();

  const firstAutomationsHeading = page.getByRole("heading", { name: "Automations" }).first();
  const firstCreateAutomationHeading = page.getByRole("heading", { name: "Create Automation" }).first();
  const automationsBox = await firstAutomationsHeading.boundingBox();
  const createAutomationBox = await firstCreateAutomationHeading.boundingBox();

  expect(automationsBox).not.toBeNull();
  expect(createAutomationBox).not.toBeNull();
  if (!automationsBox || !createAutomationBox) {
    return;
  }

  expect(createAutomationBox.y).toBeGreaterThan(automationsBox.y + automationsBox.height + 16);
});
