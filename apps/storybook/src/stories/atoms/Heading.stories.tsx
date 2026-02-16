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
