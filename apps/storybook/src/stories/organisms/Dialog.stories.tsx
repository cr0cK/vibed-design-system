import { Button, Dialog, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Dialog", component: Dialog, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() { setOpen(true); }}>Open dialog</Button>
      <Dialog
        open={open}
        variant="confirm"
        title="Publish automation"
        description={<Text size="sm">This will activate all delivery channels.</Text>}
        onClose={function onClose() { setOpen(false); }}
      />
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
