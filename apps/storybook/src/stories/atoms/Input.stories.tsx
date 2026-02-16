import { Input, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Input", component: Input, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Input placeholder="Email" />
        <Input placeholder="Invalid state" invalid />
      </Stack>
    );
  }
};
