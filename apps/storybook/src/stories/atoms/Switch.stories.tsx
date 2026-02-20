import { Stack, Switch } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Switch", component: Switch, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [checkedSm, setCheckedSm] = useState(false);
  const [checkedMd, setCheckedMd] = useState(true);
  const [checkedLg, setCheckedLg] = useState(false);

  return (
    <Stack gap="sm">
      <Switch controlSize="sm" checked={checkedSm} onCheckedChange={setCheckedSm} label="Release mode (sm)" />
      <Switch controlSize="md" checked={checkedMd} onCheckedChange={setCheckedMd} label="Release mode (md)" />
      <Switch controlSize="lg" checked={checkedLg} onCheckedChange={setCheckedLg} label="Release mode (lg)" />
    </Stack>
  );
  }
};

export const Playground = {
  args: {
    controlSize: "md",
    label: "Enable schedule",
    checked: true,
    disabled: false
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <Switch controlSize={args.controlSize} label={args.label} checked={args.checked} disabled={args.disabled} />;
  }
};

