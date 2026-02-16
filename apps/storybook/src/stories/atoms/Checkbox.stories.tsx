import { Checkbox, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Checkbox", component: Checkbox, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Checkbox controlSize="sm" label="Design updates (sm)" defaultChecked />
        <Checkbox controlSize="md" label="Release notifications (md)" />
        <Checkbox controlSize="lg" label="Billing alerts (lg)" />
      </Stack>
    );
  }
};
