import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { DesignSystemProvider } from "@vibed/design-system";

interface ProviderShellProps {
  children: ReactNode;
}

function ProviderShell(props: ProviderShellProps) {
  return (
    <DesignSystemProvider mode="light" density="comfortable">
      <div style={{ padding: "2rem", minHeight: "100vh" }}>{props.children}</div>
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
    controls: {
      expanded: true
    }
  }
};

export default preview;
