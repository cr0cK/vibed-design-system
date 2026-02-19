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
