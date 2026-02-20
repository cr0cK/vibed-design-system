import { DropdownMenu, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/DropdownMenu", component: DropdownMenu, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [selectedId, setSelectedId] = useState("profile");

  return (
    <Stack gap="sm">
      <DropdownMenu
        triggerLabel="Open menu"
        selectedId={selectedId}
        onItemSelect={setSelectedId}
        items={[
          { id: "profile", label: "Profile" },
          { id: "team", label: "Team" },
          { id: "settings", label: "Settings" },
          { id: "logout", label: "Sign out" }
        ]}
      />
      <Text size="sm" tone="muted">Selected: {selectedId}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: { triggerLabel: "Open menu", selectedId: "profile" },
  argTypes: {
    triggerLabel: { control: "text" },
    selectedId: { control: "select", options: ["profile", "team", "settings", "logout"] }
  },
  render: function Render(args: any) {
    return (
      <DropdownMenu
        triggerLabel={args.triggerLabel}
        selectedId={args.selectedId}
        onItemSelect={function onItemSelect() {}}
        items={[
          { id: "profile", label: "Profile" },
          { id: "team", label: "Team" },
          { id: "settings", label: "Settings" },
          { id: "logout", label: "Sign out" }
        ]}
      />
    );
  }
};

