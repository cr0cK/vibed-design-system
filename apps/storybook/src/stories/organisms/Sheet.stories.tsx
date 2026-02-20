import { Button, Select, Sheet, Stack, Text } from "@vibed/design-system";
import { useState } from "react";
import type { SheetProps } from "@vibed/design-system";

const meta = { title: "Organisms/Sheet", component: Sheet, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [open, setOpen] = useState(false);
  const [overlayMode, setOverlayMode] = useState<NonNullable<SheetProps["overlayMode"]>>("container");

  return (
    <Stack gap="sm">
      <Select
        value={overlayMode}
        onChange={function onChange(event) {
          setOverlayMode(event.target.value as NonNullable<SheetProps["overlayMode"]>);
        }}
      >
        <option value="container">container</option>
        <option value="viewport">viewport</option>
      </Select>
      <Button tone="neutral" onClick={function onClick() { setOpen(true); }}>Open sheet</Button>
      <Sheet open={open} overlayMode={overlayMode} side="right" title="Quick settings" onClose={function onClose() { setOpen(false); }}>
        <Text size="sm">Lightweight side surface for fast edits.</Text>
      </Sheet>
    </Stack>
  );
  }
};

export const Playground = {
  args: { open: true, side: "right", overlayMode: "container", title: "Quick settings" },
  argTypes: {
    open: { control: "boolean" },
    side: { control: "select", options: ["left", "right", "top", "bottom"] },
    overlayMode: { control: "select", options: ["container", "viewport"] },
    title: { control: "text" }
  },
  render: function Render(args: any) {
    return (
      <Sheet open={args.open} overlayMode={args.overlayMode} side={args.side} title={args.title} onClose={function onClose() {}}>
        <Text size="sm">Lightweight side surface for fast edits.</Text>
      </Sheet>
    );
  }
};

