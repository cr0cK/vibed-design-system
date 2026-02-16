import { Radio, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Radio", component: Radio, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [value, setValue] = useState("a");

  return (
    <Stack gap="sm">
      <Radio controlSize="sm" name="plan" label="Starter (sm)" checked={value === "a"} onChange={function onChange() { setValue("a"); }} />
      <Radio controlSize="md" name="plan" label="Pro (md)" checked={value === "b"} onChange={function onChange() { setValue("b"); }} />
      <Radio controlSize="lg" name="plan" label="Enterprise (lg)" checked={value === "c"} onChange={function onChange() { setValue("c"); }} />
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
