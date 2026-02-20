import { RangeSlider, Stack } from "@vibed/design-system";
import { useEffect, useState } from "react";

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

export const Playground = {
  args: { min: 0, max: 100, defaultStart: 20, defaultEnd: 80 },
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    defaultStart: { control: "number" },
    defaultEnd: { control: "number" }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState<[number, number]>([args.defaultStart, args.defaultEnd]);

    useEffect(function syncArgs() {
      setValue([args.defaultStart, args.defaultEnd]);
    }, [args.defaultStart, args.defaultEnd]);

    return <RangeSlider min={args.min} max={args.max} value={value} onValueChange={setValue} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;
