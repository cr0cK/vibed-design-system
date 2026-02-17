import { Button, Stack, VisuallyHidden } from "@vibed/design-system";

const meta = { title: "Utilities/VisuallyHidden", component: VisuallyHidden, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Button tone="neutral">
          <VisuallyHidden>Close notification</VisuallyHidden>
          ✕
        </Button>
      </Stack>
    );
  }
};
