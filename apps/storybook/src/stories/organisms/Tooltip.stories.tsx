import { Button, Select, Stack, Tooltip } from "@vibed/design-system";
import { useState } from "react";
import type { TooltipPlacement } from "@vibed/design-system";

const meta = { title: "Organisms/Tooltip", component: Tooltip, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    const [placement, setPlacement] = useState<TooltipPlacement>("top");

    return (
      <Stack gap="sm" align="start">
        <Select
          value={placement}
          onChange={function onChange(event) {
            setPlacement(event.target.value as TooltipPlacement);
          }}
        >
          <option value="top">top</option>
          <option value="top-left">top-left</option>
          <option value="top-right">top-right</option>
          <option value="bottom">bottom</option>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-right">bottom-right</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </Select>
        <Tooltip placement={placement} tooltipContent="Helpful hint">
          <Button tone="neutral" size="sm">Hover me</Button>
        </Tooltip>
      </Stack>
    );
  }
};

export const Playground = {
  args: { placement: "top", tooltipContent: "Helpful hint" },
  argTypes: {
    placement: { control: "select", options: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right"] },
    tooltipContent: { control: "text" }
  },
  render: function Render(args: any) {
    return (
      <Tooltip placement={args.placement} tooltipContent={args.tooltipContent}>
        <Button tone="neutral" size="sm">Hover me</Button>
      </Tooltip>
    );
  }
};

