import { Box, Button, Drawer, Modal, Popover, Stack, Text, Tooltip } from "@vibed/design-system";
import { useState } from "react";

const meta = {
  title: "Phase 1/Overlays",
  component: Stack,
  tags: ["autodocs"]
};

export default meta;

function OverlayDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Stack gap="md">
      <Box surface="elevated" padding="lg" radius="lg">
        <Stack gap="sm">
          <Text weight="semibold">Overlay primitives</Text>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Button tone="primary" onClick={function onClick() { setModalOpen(true); }}>
              Open modal
            </Button>
            <Button tone="neutral" onClick={function onClick() { setDrawerOpen(true); }}>
              Open drawer
            </Button>
            <Tooltip tooltipContent="Helpful hint">
              <Button tone="neutral">Tooltip trigger</Button>
            </Tooltip>
            <Popover triggerLabel="Open popover" popoverContent={<Text size="sm">Quick popover content</Text>} />
          </div>
        </Stack>
      </Box>

      <Modal open={modalOpen} title="Release confirmation" onClose={function onClose() { setModalOpen(false); }}>
        <Text size="sm">You are about to promote this version to stable.</Text>
      </Modal>

      <Drawer open={drawerOpen} onClose={function onClose() { setDrawerOpen(false); }}>
        <Text size="sm">Drawer content goes here.</Text>
      </Drawer>
    </Stack>
  );
}

export const Showcase = {
  render: function Render() {
    return <OverlayDemo />;
  }
};
