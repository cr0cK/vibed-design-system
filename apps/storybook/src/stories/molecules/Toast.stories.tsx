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

export const Playground = {
  args: { tone: "success", heading: "Saved", description: "Draft was saved successfully." },
  argTypes: {
    tone: { control: "select", options: ["success", "danger"] },
    heading: { control: "text" },
    description: { control: "text" }
  },
  render: function Render(args: any) {
    return <Toast heading={args.heading} description={args.description} tone={args.tone} />;
  }
};

