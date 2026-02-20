import { Menu, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Menu", component: Menu, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [selectedId, setSelectedId] = useState("dashboard");

  return (
    <Stack gap="sm">
      <Menu
        selectedId={selectedId}
        onItemSelect={setSelectedId}
        items={[
          { id: "dashboard", label: "Dashboard" },
          { id: "automations", label: "Automations" },
          { id: "settings", label: "Settings" },
          { id: "billing", label: "Billing", disabled: true }
        ]}
      />
      <Text size="sm" tone="muted">Selected: {selectedId}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: { selectedId: "dashboard" },
  argTypes: { selectedId: { control: "select", options: ["dashboard", "automations", "settings", "billing"] } },
  render: function Render(args: any) {
    return (
      <Menu
        selectedId={args.selectedId}
        onItemSelect={function onItemSelect() {}}
        items={[
          { id: "dashboard", label: "Dashboard" },
          { id: "automations", label: "Automations" },
          { id: "settings", label: "Settings" },
          { id: "billing", label: "Billing", disabled: true }
        ]}
      />
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

