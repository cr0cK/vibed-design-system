import { Combobox, Stack, Text } from "@vibed/design-system";
import { useEffect, useState } from "react";

const meta = { title: "Molecules/Combobox", component: Combobox, tags: ["autodocs"] };
export default meta;

const options = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "product", label: "Product" },
  { value: "ops", label: "Operations" }
];

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState("design");

  return (
    <Stack gap="sm">
      <Combobox options={options} value={value} onValueChange={setValue} placeholder="Select team" />
      <Text size="sm" tone="muted">Selected: {value}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: { placeholder: "Select team", value: "design" },
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "select", options: ["engineering", "design", "product", "ops"] }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState(args.value);

    useEffect(function syncArgs() {
      setValue(args.value);
    }, [args.value]);

    return (
      <Stack gap="sm">
        <Combobox options={options} value={value} onValueChange={setValue} placeholder={args.placeholder} />
        <Text size="sm" tone="muted">Selected: {value}</Text>
      </Stack>
    );
  }
};

