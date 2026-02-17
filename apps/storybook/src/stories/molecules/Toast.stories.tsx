import { Stack, Toast } from "@vibed/design-system";

const meta = { title: "Molecules/Toast", component: Toast, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Toast heading="Saved" description="Draft was saved successfully." tone="success" />
        <Toast heading="Sync issue" description="Last sync failed for one source." tone="danger" />
      </Stack>
    );
  }
};
