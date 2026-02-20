import { MultiSelect, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/MultiSelect", component: MultiSelect, tags: ["autodocs"] };
export default meta;

const options = [
  { value: "email", label: "Email" },
  { value: "slack", label: "Slack" },
  { value: "sms", label: "SMS" },
  { value: "webhook", label: "Webhook" }
];

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState<string[]>(["email", "slack"]);

  return (
    <Stack gap="sm">
      <MultiSelect options={options} value={value} onValueChange={setValue} />
      <Text size="sm" tone="muted">Selected: {value.join(", ") || "none"}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: { placeholder: "Select channels" },
  argTypes: { placeholder: { control: "text" } },
  render: function Render(args: any) {
    const [value, setValue] = useState<string[]>(["email", "slack"]);
    return (
      <Stack gap="sm">
        <MultiSelect options={options} value={value} onValueChange={setValue} placeholder={args.placeholder} />
        <Text size="sm" tone="muted">Selected: {value.join(", ") || "none"}</Text>
      </Stack>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

