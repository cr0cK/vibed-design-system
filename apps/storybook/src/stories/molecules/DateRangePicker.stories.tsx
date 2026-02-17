import { DateRangePicker, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/DateRangePicker", component: DateRangePicker, tags: ["autodocs"] };
export default meta;

function Demo() {
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

export const Showcase = { render: function Render() { return <Demo />; } };
