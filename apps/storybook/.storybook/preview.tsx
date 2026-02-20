import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { Box, DesignSystemProvider, Heading, Stack, Text } from "@vibed/design-system";
import { getStorySummary } from "./storySummary";
import "./preview.css";
import "../src/styles/fonts.css";

interface ProviderShellProps {
  children: ReactNode;
  maxWidthMode: "default" | "full";
}

function ProviderShell(props: ProviderShellProps) {
  const maxWidthClassName = props.maxWidthMode === "full" ? "sb-vibed-shell--full" : "sb-vibed-shell--default";

  return (
    <DesignSystemProvider mode="light" density="comfortable">
      <div className={`sb-vibed-shell ${maxWidthClassName}`}>
        {props.children}
      </div>
    </DesignSystemProvider>
  );
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isFullPageShowcase =
        context.title === "Showcase/Full Page Composition" ||
        (typeof context.id === "string" && context.id.startsWith("showcase-full-page-composition--"));
      const maxWidthMode = context.parameters?.canvasMaxWidth === "full" || isFullPageShowcase ? "full" : "default";
      const summary = getStorySummary(context.title ?? "");
      const showSummary = context.viewMode === "story" && summary !== null;

      return (
        <ProviderShell maxWidthMode={maxWidthMode}>
          {showSummary ? (
            <Box surface="elevated" border="subtle" radius="md" padding="sm">
              <Stack gap="xs">
                <Heading level={5}>{summary.title}</Heading>
                <Text size="sm" tone="muted">{summary.what}</Text>
                <Text size="sm" tone="muted">{summary.how}</Text>
              </Stack>
            </Box>
          ) : null}
          {showSummary ? <Box pt="sm" /> : null}
          <Story />
        </ProviderShell>
      );
    }
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: "600px"
      }
    },
    options: {
      storySort: function storySort(a, b) {
        const titleA =
          a && typeof a === "object" && "title" in a && typeof a.title === "string" ? a.title : "";
        const titleB =
          b && typeof b === "object" && "title" in b && typeof b.title === "string" ? b.title : "";

        const docsPrefix = "Documentation/";
        const showcasePrefix = "Showcase/";
        const docsOrder = [
          "1. Presentation",
          "2. Architecture",
          "3. Patterns",
          "4. Features",
          "5. Roadmap",
          "6. Contributions",
          "7. Public Usage"
        ];
        const patternsOrder = ["Styling", "State", "Control Size"];

        const aIsDocs = titleA.startsWith(docsPrefix);
        const bIsDocs = titleB.startsWith(docsPrefix);
        const aIsShowcase = titleA.startsWith(showcasePrefix);
        const bIsShowcase = titleB.startsWith(showcasePrefix);

        if (aIsDocs && !bIsDocs) {
          return -1;
        }
        if (!aIsDocs && bIsDocs) {
          return 1;
        }
        if (aIsShowcase && !bIsShowcase) {
          return aIsDocs ? 1 : -1;
        }
        if (!aIsShowcase && bIsShowcase) {
          return bIsDocs ? -1 : 1;
        }
        if (aIsDocs && bIsDocs) {
          const partsA = titleA.split("/");
          const partsB = titleB.split("/");
          const sectionA = partsA[1] ?? "";
          const sectionB = partsB[1] ?? "";
          const sectionIndexA = docsOrder.indexOf(sectionA);
          const sectionIndexB = docsOrder.indexOf(sectionB);
          const normalizedSectionIndexA = sectionIndexA >= 0 ? sectionIndexA : docsOrder.length;
          const normalizedSectionIndexB = sectionIndexB >= 0 ? sectionIndexB : docsOrder.length;

          if (normalizedSectionIndexA !== normalizedSectionIndexB) {
            return normalizedSectionIndexA - normalizedSectionIndexB;
          }

          if (sectionA === "3. Patterns" && sectionB === "3. Patterns") {
            const subA = partsA[2] ?? "";
            const subB = partsB[2] ?? "";
            const subIndexA = patternsOrder.indexOf(subA);
            const subIndexB = patternsOrder.indexOf(subB);
            const normalizedSubIndexA = subIndexA >= 0 ? subIndexA : patternsOrder.length;
            const normalizedSubIndexB = subIndexB >= 0 ? subIndexB : patternsOrder.length;

            if (normalizedSubIndexA !== normalizedSubIndexB) {
              return normalizedSubIndexA - normalizedSubIndexB;
            }
          }

          return titleA.localeCompare(titleB);
        }

        return titleA.localeCompare(titleB);
      }
    },
    controls: {
      expanded: true
    }
  }
};

export default preview;
