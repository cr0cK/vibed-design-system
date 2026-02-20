import { Container, NumberInput, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/NumberInput", component: NumberInput, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState(5);

  return (
    <Container width="sm">
      <Stack gap="sm">
        <NumberInput controlSize="sm" min={0} max={10} defaultValue={2} />
        <NumberInput controlSize="md" min={0} max={10} defaultValue={4} />
        <NumberInput controlSize="lg" min={0} max={10} value={value} onValueChange={setValue} />
        <Text size="sm" tone="muted">Controlled value: {value}</Text>
      </Stack>
    </Container>
  );
  }
};

export const Playground = {
  args: {
    controlSize: "md",
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 5,
    disabled: false
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "number" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <NumberInput controlSize={args.controlSize} min={args.min} max={args.max} step={args.step} defaultValue={args.defaultValue} disabled={args.disabled} />;
  }
};

