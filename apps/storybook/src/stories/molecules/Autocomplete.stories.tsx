import { Autocomplete, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Autocomplete", component: Autocomplete, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState("");

  return (
    <Stack gap="sm">
      <Autocomplete
        suggestions={["Daily Digest", "Weekly Digest", "Quarterly Review", "Ops Snapshot", "Morning Pulse"]}
        value={value}
        onValueChange={setValue}
        placeholder="Type automation name"
      />
      <Text size="sm" tone="muted">Value: {value || "-"}</Text>
    </Stack>
  );
  }
};

export const Playground = {
  args: {
    placeholder: "Type automation name"
  },
  argTypes: {
    placeholder: { control: "text" }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState("");
    return (
      <Stack gap="sm">
        <Autocomplete
          suggestions={["Daily Digest", "Weekly Digest", "Quarterly Review", "Ops Snapshot", "Morning Pulse"]}
          value={value}
          onValueChange={setValue}
          placeholder={args.placeholder}
        />
        <Text size="sm" tone="muted">Value: {value || "-"}</Text>
      </Stack>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

