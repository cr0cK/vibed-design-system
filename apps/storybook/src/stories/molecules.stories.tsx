import type { CSSProperties } from "react";
import { Card, Field, Text } from "@vibed/design-system";

const inputStyle: CSSProperties = {
  width: "100%",
  border: "1px solid var(--ds-color-border)",
  borderRadius: "var(--ds-radius-sm)",
  padding: "0.6rem 0.75rem",
  fontSize: "0.95rem",
  fontFamily: "var(--ds-font-body)",
  backgroundColor: "var(--ds-color-surface)",
  color: "var(--ds-color-text)"
};

const meta = {
  title: "Molecules/Card + Field",
  component: Card,
  tags: ["autodocs"]
};

export default meta;

export const Default = {
  render: function Render() {
    return (
      <Card title="Project Settings" subtitle="Wire tiny pieces into bigger behavior">
        <Field inputId="project-name" label="Project name" hint="Used in menus and changelog entries">
          <input id="project-name" style={inputStyle} placeholder="Design Ops" />
        </Field>
        <Text size="sm" tone="muted">
          All components accept className for escape hatches, but variant APIs cover common states.
        </Text>
      </Card>
    );
  }
};
