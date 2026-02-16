import { Avatar, Inline, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Avatar", component: Avatar, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Inline gap="sm" align="center">
          <Avatar name="Olivia Jones" controlSize="sm" />
          <Avatar name="Olivia Jones" controlSize="md" />
          <Avatar name="Olivia Jones" controlSize="lg" />
        </Inline>
        <Inline gap="sm" align="center">
          <Avatar name="Liam Smith" shape="circle" />
          <Avatar name="Liam Smith" shape="rounded" />
          <Avatar name="Liam Smith" shape="square" />
        </Inline>
        <Text size="sm" tone="muted">Fallback initials are generated from the name.</Text>
      </Stack>
    );
  }
};
