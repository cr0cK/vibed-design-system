import { Autocomplete, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Autocomplete", component: Autocomplete, tags: ["autodocs"] };
export default meta;

function Demo() {
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

export const Showcase = { render: function Render() { return <Demo />; } };
