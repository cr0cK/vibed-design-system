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
