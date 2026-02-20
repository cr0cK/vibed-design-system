import { Box, Container, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Container", component: Container, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Container width="md">
        <Box padding="md" surface="elevated" radius="md">
          <Text>Centered constrained content.</Text>
        </Box>
      </Container>
    );
  }
};

export const Playground = {
  args: {
    width: "md",
    content: "Centered constrained content."
  },
  argTypes: {
    width: { control: "select", options: ["sm", "md", "lg", "xl"] },
    content: { control: "text" }
  },
  render: function Render(args: any) {
    return (
      <Container width={args.width}>
        <Box padding="md" surface="elevated" radius="md">
          <Text>{args.content}</Text>
        </Box>
      </Container>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

