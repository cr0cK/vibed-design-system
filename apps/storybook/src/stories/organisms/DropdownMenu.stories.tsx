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
