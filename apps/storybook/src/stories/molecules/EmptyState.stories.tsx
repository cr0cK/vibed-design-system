import { Button, EmptyState } from "@vibed/design-system";

const meta = { title: "Molecules/EmptyState", component: EmptyState, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <EmptyState
        title="No automations yet"
        description="Create your first automation to start receiving digest summaries."
        icon="✦"
        action={<Button tone="primary">Create automation</Button>}
      />
    );
  }
};
