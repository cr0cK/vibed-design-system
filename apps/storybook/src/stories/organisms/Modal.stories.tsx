import { Button, Modal, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Modal", component: Modal, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() { setOpen(true); }}>Open modal</Button>
      <Modal open={open} title="Confirm release" onClose={function onClose() { setOpen(false); }}>
        <Text size="sm">Promote this release to stable?</Text>
      </Modal>
    </Stack>
  );
  }
};
