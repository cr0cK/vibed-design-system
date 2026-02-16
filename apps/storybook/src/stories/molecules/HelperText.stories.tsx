import { HelperText, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/HelperText", component: HelperText, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="xs">
        <HelperText tone="muted">Muted helper text</HelperText>
        <HelperText tone="success">Success helper text</HelperText>
        <HelperText tone="danger">Error helper text</HelperText>
      </Stack>
    );
  }
};
