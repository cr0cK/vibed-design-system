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
