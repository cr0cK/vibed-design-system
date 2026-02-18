import { Sidebar, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Sidebar", component: Sidebar, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [active, setActive] = useState("inbox");

  return (
    <Sidebar
      heading="Orange Motion"
      activeItemId={active}
      onItemSelect={setActive}
      groups={[
        {
          id: "main",
          label: "Main",
          items: [
            { id: "inbox", label: "Inbox", icon: "✉" },
            { id: "automations", label: "Automations", icon: "⚙" },
            { id: "contacts", label: "Contacts", icon: "👥" }
          ]
        },
        {
          id: "admin",
          label: "Admin",
          items: [
            { id: "settings", label: "Settings", icon: "⋯" },
            { id: "billing", label: "Billing", icon: "$", disabled: true }
          ]
        }
      ]}
      footer={<Text size="sm" tone="muted">v0.1.0</Text>}
    />
  );
  }
};
