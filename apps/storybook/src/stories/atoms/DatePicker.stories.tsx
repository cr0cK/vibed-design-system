import { DatePicker, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/DatePicker", component: DatePicker, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <DatePicker controlSize="sm" defaultValue="2026-02-16" />
        <DatePicker controlSize="md" defaultValue="2026-02-18" />
        <DatePicker controlSize="lg" defaultValue="2026-02-20" />
      </Stack>
    );
  }
};
