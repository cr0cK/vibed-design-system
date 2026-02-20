import { Button, Navbar, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Navbar", component: Navbar, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [active, setActive] = useState("workspace");

  return (
    <Stack gap="sm">
      <Navbar
        brand="Orange Motion"
        items={[
          { id: "workspace", label: "Workspace" },
          { id: "automations", label: "Automations" },
          { id: "analytics", label: "Analytics" }
        ]}
        activeItemId={active}
        onItemSelect={setActive}
        actions={<Button tone="primary" size="sm">New automation</Button>}
      />
      <Text size="sm" tone="muted">Active: {active}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: { brand: "Orange Motion", activeItemId: "workspace" },
  argTypes: {
    brand: { control: "text" },
    activeItemId: { control: "select", options: ["workspace", "automations", "analytics"] }
  },
  render: function Render(args: any) {
    return (
      <Navbar
        brand={args.brand}
        items={[
          { id: "workspace", label: "Workspace" },
          { id: "automations", label: "Automations" },
          { id: "analytics", label: "Analytics" }
        ]}
        activeItemId={args.activeItemId}
        onItemSelect={function onItemSelect() {}}
      />
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

