import { Button, Dialog, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Dialog", component: Dialog, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
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
};

export const Playground = {
  args: { variant: "confirm", title: "Publish automation", open: true },
  argTypes: {
    variant: { control: "select", options: ["confirm", "danger", "info"] },
    title: { control: "text" },
    open: { control: "boolean" }
  },
  render: function Render(args: any) {
    return (
      <Dialog
        open={args.open}
        variant={args.variant}
        title={args.title}
        description={<Text size="sm">This will activate all delivery channels.</Text>}
        onClose={function onClose() {}}
      />
    );
  }
};

