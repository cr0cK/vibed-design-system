import { DateRangePicker, Stack, Text } from "@vibed/design-system";
import { useEffect, useState } from "react";

const meta = { title: "Molecules/DateRangePicker", component: DateRangePicker, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [start, setStart] = useState("2026-02-16");
  const [end, setEnd] = useState("2026-02-23");

  return (
    <Stack gap="sm">
      <DateRangePicker
        startValue={start}
        endValue={end}
        onRangeChange={function onRangeChange(nextStart, nextEnd) {
          setStart(nextStart);
          setEnd(nextEnd);
        }}
      />
      <Text size="sm" tone="muted">{start} to {end}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: { startValue: "2026-02-16", endValue: "2026-02-23" },
  argTypes: { startValue: { control: "text" }, endValue: { control: "text" } },
  render: function Render(args: any) {
    const [start, setStart] = useState(args.startValue);
    const [end, setEnd] = useState(args.endValue);

    useEffect(function syncArgs() {
      setStart(args.startValue);
      setEnd(args.endValue);
    }, [args.startValue, args.endValue]);

    return (
      <Stack gap="sm">
        <DateRangePicker
          startValue={start}
          endValue={end}
          onRangeChange={function onRangeChange(nextStart, nextEnd) {
            setStart(nextStart);
            setEnd(nextEnd);
          }}
        />
        <Text size="sm" tone="muted">{start} to {end}</Text>
      </Stack>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;
