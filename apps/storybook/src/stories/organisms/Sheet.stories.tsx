import { Button, Select, Sheet, Stack, Text } from "@vibed/design-system";
import { useState } from "react";
import type { SheetProps } from "@vibed/design-system";

const meta = { title: "Organisms/Sheet", component: Sheet, tags: ["autodocs"] };
export default meta;

function Demo() {
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

export const Showcase = { render: function Render() { return <Demo />; } };
