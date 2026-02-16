import { Switch } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Atoms/Switch", component: Switch, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onCheckedChange={setChecked} label="Release mode" />;
}

export const Showcase = { render: function Render() { return <Demo />; } };
