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
