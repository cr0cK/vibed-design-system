import { Slider, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Slider", component: Slider, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState(35);

  return (
    <Stack gap="sm">
      <Slider controlSize="sm" min={0} max={100} defaultValue={20} showValue />
      <Slider controlSize="md" min={0} max={100} defaultValue={50} showValue />
      <Slider controlSize="lg" min={0} max={100} value={value} onValueChange={setValue} showValue />
    </Stack>
  );
  }
};

export const Playground = {
  args: {
    controlSize: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 35,
    showValue: true
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "number" },
    showValue: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <Slider controlSize={args.controlSize} min={args.min} max={args.max} step={args.step} defaultValue={args.defaultValue} showValue={args.showValue} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

