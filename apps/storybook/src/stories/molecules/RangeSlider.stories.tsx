import { RangeSlider, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/RangeSlider", component: RangeSlider, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <Stack gap="sm">
      <RangeSlider defaultValue={[10, 60]} />
      <RangeSlider value={value} onValueChange={setValue} />
    </Stack>
  );
  }
};
