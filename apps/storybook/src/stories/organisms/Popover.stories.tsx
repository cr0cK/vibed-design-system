import { Popover, Select, Stack, Text } from "@vibed/design-system";
import { useState } from "react";
import type { PopoverPlacement } from "@vibed/design-system";

const meta = { title: "Organisms/Popover", component: Popover, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    const [placement, setPlacement] = useState<PopoverPlacement>("bottom-left");

    return (
      <Stack gap="sm" align="start">
        <Select
          value={placement}
          onChange={function onChange(event) {
            setPlacement(event.target.value as PopoverPlacement);
          }}
        >
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-right">bottom-right</option>
          <option value="top-left">top-left</option>
          <option value="top-right">top-right</option>
        </Select>
        <Popover
          placement={placement}
          triggerLabel="Open popover"
          popoverContent={<Text size="sm">Popover content</Text>}
        />
      </Stack>
    );
  }
};

export const Playground = {
  args: { placement: "bottom-left", triggerLabel: "Open popover", content: "Popover content" },
  argTypes: {
    placement: { control: "select", options: ["bottom-left", "bottom-right", "top-left", "top-right"] },
    triggerLabel: { control: "text" },
    content: { control: "text" }
  },
  render: function Render(args: any) {
    return <Popover placement={args.placement} triggerLabel={args.triggerLabel} popoverContent={<Text size="sm">{args.content}</Text>} />;
  }
};

