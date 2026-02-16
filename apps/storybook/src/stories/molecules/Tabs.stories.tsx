import { Tabs, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Tabs", component: Tabs, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [value, setValue] = useState("overview");

  return (
    <Tabs
      items={[{ id: "overview", label: "Overview" }, { id: "tokens", label: "Tokens" }, { id: "usage", label: "Usage" }]}
      value={value}
      onValueChange={setValue}
      panels={{
        overview: <Text>Overview panel</Text>,
        tokens: <Text>Tokens panel</Text>,
        usage: <Text>Usage panel</Text>
      }}
    />
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
