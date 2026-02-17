import { Button, Navbar, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Navbar", component: Navbar, tags: ["autodocs"] };
export default meta;

function Demo() {
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

export const Showcase = { render: function Render() { return <Demo />; } };
