import { Button, Select, Stack, Tooltip } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Tooltip", component: Tooltip, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    const [placement, setPlacement] = useState("top");

    return (
      <Stack gap="sm" align="start">
        <Select
          value={placement}
          onChange={function onChange(event) {
            setPlacement(event.target.value);
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
