import { Box, Button, Drawer, Input, Select, Stack, Switch, Text } from "@vibed/design-system";
import { useState } from "react";
import type { DrawerProps } from "@vibed/design-system";

const meta = { title: "Organisms/Drawer", component: Drawer, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [open, setOpen] = useState(false);
  const [overlayMode, setOverlayMode] = useState<NonNullable<DrawerProps["overlayMode"]>>("viewport");
  const [notifications, setNotifications] = useState(true);

  return (
    <Stack gap="sm">
      <Select
        value={overlayMode}
        onChange={function onChange(event) {
          setOverlayMode(event.target.value as NonNullable<DrawerProps["overlayMode"]>);
        }}
      >
        <option value="viewport">viewport</option>
        <option value="container">container</option>
      </Select>
      <Button tone="neutral" onClick={function onClick() { setOpen(true); }}>Open drawer</Button>
      <Drawer open={open} overlayMode={overlayMode} onClose={function onClose() { setOpen(false); }}>
        <Stack gap="sm">
          <Text size="sm">Quick preferences for this workspace.</Text>
          <Box>
            <Text size="sm" weight="semibold">Channel</Text>
            <Select defaultValue="ops">
              <option value="ops">Operations</option>
              <option value="exec">Executive</option>
              <option value="all">All teams</option>
            </Select>
          </Box>
          <Box>
            <Text size="sm" weight="semibold">Digest title</Text>
            <Input defaultValue="Daily summary" />
          </Box>
          <Switch checked={notifications} onCheckedChange={setNotifications} label="Send notifications" />
          <Button tone="primary">Apply changes</Button>
        </Stack>
      </Drawer>
    </Stack>
  );
  }
};

export const Playground = {
  args: { open: true, side: "right", overlayMode: "container" },
  argTypes: {
    open: { control: "boolean" },
    side: { control: "select", options: ["left", "right"] },
    overlayMode: { control: "select", options: ["container", "viewport"] }
  },
  render: function Render(args: any) {
    return (
      <Drawer open={args.open} side={args.side} overlayMode={args.overlayMode} title="Quick preferences" onClose={function onClose() {}}>
        <Stack gap="sm">
          <Text size="sm">Quick preferences for this workspace.</Text>
          <Input defaultValue="Daily summary" />
          <Button tone="primary">Apply changes</Button>
        </Stack>
      </Drawer>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

