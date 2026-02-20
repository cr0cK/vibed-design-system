import { Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Text", component: Text, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text size="xl" weight="bold">Display text</Text>
        <Text size="md">Body text</Text>
        <Text size="sm" tone="muted">Helper text</Text>
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    size: "md",
    weight: "regular",
    tone: "default",
    children: "Body text"
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    weight: { control: "select", options: ["regular", "semibold", "bold"] },
    tone: { control: "select", options: ["default", "muted", "danger", "success"] },
    children: { control: "text" }
  },
  render: function Render(args: any) {
    return <Text size={args.size} weight={args.weight} tone={args.tone}>{args.children}</Text>;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

