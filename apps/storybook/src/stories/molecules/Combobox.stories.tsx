import { Combobox, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

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
  args: { placeholder: "Select team" },
  argTypes: { placeholder: { control: "text" } },
  render: function Render(args: any) {
    const [value, setValue] = useState("design");
    return (
      <Stack gap="sm">
        <Combobox options={options} value={value} onValueChange={setValue} placeholder={args.placeholder} />
        <Text size="sm" tone="muted">Selected: {value}</Text>
      </Stack>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

