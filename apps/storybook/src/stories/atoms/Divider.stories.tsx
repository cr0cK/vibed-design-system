import { Divider, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Divider", component: Divider, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text>Section A</Text>
        <Divider />
        <Text>Section B</Text>
      </Stack>
    );
  }
};

export const Playground = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text>Section A</Text>
        <Divider />
        <Text>Section B</Text>
      </Stack>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

