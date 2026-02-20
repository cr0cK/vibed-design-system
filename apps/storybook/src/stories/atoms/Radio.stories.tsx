import { Radio, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Radio", component: Radio, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [value, setValue] = useState("a");

  return (
    <Stack gap="sm">
      <Radio controlSize="sm" name="plan" label="Starter (sm)" checked={value === "a"} onChange={function onChange() { setValue("a"); }} />
      <Radio controlSize="md" name="plan" label="Pro (md)" checked={value === "b"} onChange={function onChange() { setValue("b"); }} />
      <Radio controlSize="lg" name="plan" label="Enterprise (lg)" checked={value === "c"} onChange={function onChange() { setValue("c"); }} />
    </Stack>
  );
  }
};

export const Playground = {
  args: {
    label: "Starter plan",
    controlSize: "md",
    defaultChecked: true,
    disabled: false
  },
  argTypes: {
    label: { control: "text" },
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <Radio name="playground-radio" label={args.label} controlSize={args.controlSize} defaultChecked={args.defaultChecked} disabled={args.disabled} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

