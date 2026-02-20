import { Heading, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Heading", component: Heading, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    level: 2,
    children: "Heading preview"
  },
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    children: { control: "text" }
  },
  render: function Render(args: any) {
    return <Heading level={args.level}>{args.children}</Heading>;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

