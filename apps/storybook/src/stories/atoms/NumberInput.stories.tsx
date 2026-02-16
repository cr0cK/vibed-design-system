import { NumberInput, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/NumberInput", component: NumberInput, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [value, setValue] = useState(5);

  return (
    <Stack gap="sm">
      <NumberInput controlSize="sm" min={0} max={10} defaultValue={2} />
      <NumberInput controlSize="md" min={0} max={10} defaultValue={4} />
      <NumberInput controlSize="lg" min={0} max={10} value={value} onValueChange={setValue} />
      <Text size="sm" tone="muted">Controlled value: {value}</Text>
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
