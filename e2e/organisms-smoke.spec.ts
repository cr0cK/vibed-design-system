import { expect, test } from "@playwright/test";
import type { ConsoleMessage, Page } from "@playwright/test";

interface OrganismStory {
  id: string;
  label: string;
}

const ORGANISM_STORIES: OrganismStory[] = [
  { id: "organisms-appshell--showcase", label: "AppShell" },
  { id: "organisms-commandpalette--showcase", label: "CommandPalette" },
  { id: "organisms-dialog--showcase", label: "Dialog" },
  { id: "organisms-drawer--showcase", label: "Drawer" },
  { id: "organisms-dropdownmenu--showcase", label: "DropdownMenu" },
  { id: "organisms-filterbar--showcase", label: "FilterBar" },
  { id: "organisms-modal--showcase", label: "Modal" },
  { id: "organisms-navbar--showcase", label: "Navbar" },
  { id: "organisms-notificationcenter--showcase", label: "NotificationCenter" },
  { id: "organisms-pageheader--showcase", label: "PageHeader" },
  { id: "organisms-popover--showcase", label: "Popover" },
  { id: "organisms-settingspanel--showcase", label: "SettingsPanel" },
  { id: "organisms-sheet--showcase", label: "Sheet" },
  { id: "organisms-sidebar--showcase", label: "Sidebar" },
  { id: "organisms-toastviewport--showcase", label: "ToastViewport" },
  { id: "organisms-tooltip--showcase", label: "Tooltip" }
];

function storyUrl(storyId: string): string {
  return `/iframe.html?id=${storyId}&viewMode=story`;
}

function docsUrl(storyId: string): string {
  return `/?path=/docs/${storyId.replace("--showcase", "--docs")}`;
}

async function collectCriticalPageErrors(page: Page, run: () => Promise<void>): Promise<void> {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];

  const onPageError = function onPageError(error: Error) {
    pageErrors.push(error.message);
  };

  const onConsole = function onConsole(message: ConsoleMessage) {
    if (message.type() === "error") {
      const text = message.text();
      if (!text.includes("favicon")) {
        consoleErrors.push(text);
      }
    }
  };

  page.on("pageerror", onPageError);
  page.on("console", onConsole);

  try {
    await run();
  } finally {
    page.off("pageerror", onPageError);
    page.off("console", onConsole);
  }

  expect(pageErrors, "Unexpected page errors").toEqual([]);
  expect(consoleErrors, "Unexpected console errors").toEqual([]);
}

test.describe("organism stories", () => {
  for (const story of ORGANISM_STORIES) {
    test(`${story.label} showcase renders without runtime errors`, async ({ page }) => {
      await collectCriticalPageErrors(page, async () => {
        await page.goto(storyUrl(story.id));
        await page.waitForLoadState("networkidle");
        await expect(page.locator("#storybook-root")).toBeVisible();
      });
    });

    test(`${story.label} docs route uses iframe story rendering`, async ({ page }) => {
      await collectCriticalPageErrors(page, async () => {
        await page.goto(docsUrl(story.id));
        await page.waitForLoadState("networkidle");
        await expect(page.locator("iframe")).toBeVisible();
      });
    });
  }
});
