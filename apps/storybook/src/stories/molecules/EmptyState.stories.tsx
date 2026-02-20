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

export const Playground = {
  args: { title: "No automations yet", description: "Create your first automation to start receiving digest summaries.", icon: "✦" },
  argTypes: { title: { control: "text" }, description: { control: "text" }, icon: { control: "text" } },
  render: function Render(args: any) {
    return (
      <EmptyState
        title={args.title}
        description={args.description}
        icon={args.icon}
        action={<Button tone="primary">Create automation</Button>}
      />
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

