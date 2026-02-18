import { Button, FocusTrap, Inline, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Utilities/FocusTrap", component: FocusTrap, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [active, setActive] = useState(true);

  return (
    <Stack gap="sm">
      <Button tone="neutral" size="sm" onClick={function onClick() { setActive(!active); }}>Toggle trap: {active ? "on" : "off"}</Button>
      <FocusTrap active={active}>
        <Inline gap="xs">
          <Button tone="primary" size="sm">First</Button>
          <Button tone="neutral" size="sm">Middle</Button>
          <Button tone="neutral" size="sm">Last</Button>
        </Inline>
      </FocusTrap>
      <Text size="sm" tone="muted">Use Tab / Shift+Tab to verify cycling while trap is active.</Text>
    </Stack>
  );
  }
};
