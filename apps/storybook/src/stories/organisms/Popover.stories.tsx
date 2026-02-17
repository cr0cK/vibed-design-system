import { Popover, Select, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Popover", component: Popover, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    const [placement, setPlacement] = useState("bottom-left");

    return (
      <Stack gap="sm" align="start">
        <Select
          value={placement}
          onChange={function onChange(event) {
            setPlacement(event.target.value);
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
