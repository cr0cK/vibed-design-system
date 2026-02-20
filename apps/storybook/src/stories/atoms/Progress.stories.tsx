import { Progress, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Progress", component: Progress, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="md">
        <Progress value={26} controlSize="sm" />
        <Progress value={54} controlSize="md" tone="success" />
        <Progress value={78} controlSize="lg" tone="danger" />
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    value: 54,
    tone: "primary",
    controlSize: "md"
  },
  argTypes: {
    value: { control: { type: "number", min: 0, max: 100, step: 1 } },
    tone: { control: "select", options: ["primary", "success", "danger"] },
    controlSize: { control: "select", options: ["sm", "md", "lg"] }
  },
  render: function Render(args: any) {
    return <Progress value={args.value} tone={args.tone} controlSize={args.controlSize} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

