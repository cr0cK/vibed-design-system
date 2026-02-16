import { Checkbox, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Checkbox", component: Checkbox, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Checkbox label="Design updates" defaultChecked />
        <Checkbox label="Release notifications" />
      </Stack>
    );
  }
};
