import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { DesignSystemProvider } from "@vibed/design-system";

interface ProviderShellProps {
  children: ReactNode;
}

function ProviderShell(props: ProviderShellProps) {
  return (
    <DesignSystemProvider mode="light" density="comfortable">
      <div style={{ width: "100%", maxWidth: "960px", minHeight: "800px", margin: "0 auto", padding: "2rem 2rem 4rem", boxSizing: "border-box" }}>
        {props.children}
      </div>
    </DesignSystemProvider>
  );
}

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ProviderShell>
          <Story />
        </ProviderShell>
      );
    }
  ],
  parameters: {
    layout: "fullscreen",
    options: {
      storySort: function storySort(a, b) {
        const titleA =
          a && typeof a === "object" && "title" in a && typeof a.title === "string" ? a.title : "";
        const titleB =
          b && typeof b === "object" && "title" in b && typeof b.title === "string" ? b.title : "";

        const docsPrefix = "Documentation/";
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

        if (aIsDocs && !bIsDocs) {
          return -1;
        }
        if (!aIsDocs && bIsDocs) {
          return 1;
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
