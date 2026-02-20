import { Button, Inline } from "@vibed/design-system";

const meta = { title: "Atoms/Inline", component: Inline, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm">
        <Button tone="neutral">One</Button>
        <Button tone="neutral">Two</Button>
        <Button tone="neutral">Three</Button>
      </Inline>
    );
  }
};

export const Playground = {
  args: {
    gap: "sm",
    justify: "start",
    align: "center"
  },
  argTypes: {
    gap: { control: "select", options: ["xxs", "xs", "sm", "md", "lg"] },
    justify: { control: "select", options: ["start", "center", "between", "end"] },
    align: { control: "select", options: ["start", "center", "end"] }
  },
  render: function Render(args: any) {
    return (
      <Inline gap={args.gap} justify={args.justify} align={args.align}>
        <Button tone="neutral">One</Button>
        <Button tone="neutral">Two</Button>
        <Button tone="neutral">Three</Button>
      </Inline>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

