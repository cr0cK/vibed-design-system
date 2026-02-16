import { Stack, Textarea } from "@vibed/design-system";

const meta = { title: "Atoms/Textarea", component: Textarea, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Textarea controlSize="sm" rows={3} placeholder="Write a short summary (sm)" />
        <Textarea controlSize="md" rows={3} placeholder="Write a short summary (md)" />
        <Textarea controlSize="lg" rows={3} placeholder="Write a short summary (lg)" />
      </Stack>
    );
  }
};
