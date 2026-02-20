import { Badge, Inline } from "@vibed/design-system";

const meta = { title: "Atoms/Badge", component: Badge, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm">
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="primary">Primary</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="danger">Danger</Badge>
      </Inline>
    );
  }
};

export const Playground = {
  args: {
    tone: "neutral",
    label: "Neutral"
  },
  argTypes: {
    tone: { control: "select", options: ["neutral", "primary", "success", "danger"] },
    label: { control: "text" }
  },
  render: function Render(args: any) {
    return <Badge tone={args.tone}>{args.label}</Badge>;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

