import { Slider, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Slider", component: Slider, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [value, setValue] = useState(35);

  return (
    <Stack gap="sm">
      <Slider controlSize="sm" min={0} max={100} defaultValue={20} showValue />
      <Slider controlSize="md" min={0} max={100} defaultValue={50} showValue />
      <Slider controlSize="lg" min={0} max={100} value={value} onValueChange={setValue} showValue />
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
