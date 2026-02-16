import { Radio, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Radio", component: Radio, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [value, setValue] = useState("a");

  return (
    <Stack gap="sm">
      <Radio name="plan" label="Starter" checked={value === "a"} onChange={function onChange() { setValue("a"); }} />
      <Radio name="plan" label="Pro" checked={value === "b"} onChange={function onChange() { setValue("b"); }} />
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
