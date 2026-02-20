import { CommandPalette, Stack, Text } from "@vibed/design-system";

const meta = { title: "Organisms/CommandPalette", component: CommandPalette, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text size="sm" tone="muted">Tip: Press Ctrl+K / Cmd+K to open.</Text>
        <CommandPalette
          commands={[
            { id: "new-automation", label: "Create new automation", keywords: ["new", "create", "digest"] },
            { id: "open-settings", label: "Open settings", keywords: ["config", "preferences"] },
            { id: "view-logs", label: "View delivery logs", keywords: ["logs", "history"] }
          ]}
        />
      </Stack>
    );
  }
};

export const Playground = {
  render: function Render() {
    return (
      <CommandPalette
        commands={[
          { id: "new-automation", label: "Create new automation", keywords: ["new", "create", "digest"] },
          { id: "open-settings", label: "Open settings", keywords: ["config", "preferences"] },
          { id: "view-logs", label: "View delivery logs", keywords: ["logs", "history"] }
        ]}
      />
    );
  }
};
