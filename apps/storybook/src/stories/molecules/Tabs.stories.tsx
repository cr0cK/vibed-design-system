import { Stack, Tabs, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Tabs", component: Tabs, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [valueSm, setValueSm] = useState("overview");
  const [valueMd, setValueMd] = useState("overview");
  const [valueLg, setValueLg] = useState("overview");

  return (
    <Stack gap="sm">
      <Tabs
        controlSize="sm"
        items={[{ id: "overview", label: "Overview" }, { id: "tokens", label: "Tokens" }, { id: "usage", label: "Usage" }]}
        value={valueSm}
        onValueChange={setValueSm}
        panels={{
          overview: <Text size="sm">Overview panel (sm)</Text>,
          tokens: <Text size="sm">Tokens panel (sm)</Text>,
          usage: <Text size="sm">Usage panel (sm)</Text>
        }}
      />
      <Tabs
        controlSize="md"
        items={[{ id: "overview", label: "Overview" }, { id: "tokens", label: "Tokens" }, { id: "usage", label: "Usage" }]}
        value={valueMd}
        onValueChange={setValueMd}
        panels={{
          overview: <Text>Overview panel (md)</Text>,
          tokens: <Text>Tokens panel (md)</Text>,
          usage: <Text>Usage panel (md)</Text>
        }}
      />
      <Tabs
        controlSize="lg"
        items={[{ id: "overview", label: "Overview" }, { id: "tokens", label: "Tokens" }, { id: "usage", label: "Usage" }]}
        value={valueLg}
        onValueChange={setValueLg}
        panels={{
          overview: <Text size="lg">Overview panel (lg)</Text>,
          tokens: <Text size="lg">Tokens panel (lg)</Text>,
          usage: <Text size="lg">Usage panel (lg)</Text>
        }}
      />
    </Stack>
  );
  }
};

export const Playground = {
  args: { controlSize: "md", value: "overview" },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    value: { control: "select", options: ["overview", "tokens", "usage"] }
  },
  render: function Render(args: any) {
    return (
      <Tabs
        controlSize={args.controlSize}
        items={[{ id: "overview", label: "Overview" }, { id: "tokens", label: "Tokens" }, { id: "usage", label: "Usage" }]}
        value={args.value}
        onValueChange={function onValueChange() {}}
        panels={{
          overview: <Text>Overview panel</Text>,
          tokens: <Text>Tokens panel</Text>,
          usage: <Text>Usage panel</Text>
        }}
      />
    );
  }
};

