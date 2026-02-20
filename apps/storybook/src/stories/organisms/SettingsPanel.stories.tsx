import { Button, FormControl, Input, SettingsPanel, Stack, Switch } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/SettingsPanel", component: SettingsPanel, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [enabled, setEnabled] = useState(true);

  return (
    <SettingsPanel
      heading="Workspace settings"
      sections={[
        {
          id: "profile",
          title: "Profile",
          description: "Basic identity and display settings.",
          content: (
            <Stack gap="sm">
              <FormControl label="Workspace name" htmlFor="workspace-name">
                <Input id="workspace-name" defaultValue="Orange Motion" />
              </FormControl>
              <Button tone="primary" size="sm">Save profile</Button>
            </Stack>
          )
        },
        {
          id: "notifications",
          title: "Notifications",
          description: "Control automated delivery behavior.",
          content: <Switch checked={enabled} onCheckedChange={setEnabled} label="Enable system alerts" />
        }
      ]}
    />
  );
  }
};

export const Playground = {
  args: { heading: "Workspace settings" },
  argTypes: { heading: { control: "text" } },
  render: function Render(args: any) {
    const [enabled, setEnabled] = useState(true);
    return (
      <SettingsPanel
        heading={args.heading}
        sections={[
          {
            id: "profile",
            title: "Profile",
            description: "Basic identity and display settings.",
            content: (
              <Stack gap="sm">
                <FormControl label="Workspace name" htmlFor="workspace-name-playground">
                  <Input id="workspace-name-playground" defaultValue="Orange Motion" />
                </FormControl>
                <Button tone="primary" size="sm">Save profile</Button>
              </Stack>
            )
          },
          {
            id: "notifications",
            title: "Notifications",
            description: "Control automated delivery behavior.",
            content: <Switch checked={enabled} onCheckedChange={setEnabled} label="Enable system alerts" />
          }
        ]}
      />
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

