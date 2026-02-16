import { Button, Inline, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Button", component: Button, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Inline gap="sm">
          <Button controlSize="sm" tone="primary">Primary (sm)</Button>
          <Button controlSize="sm" tone="neutral">Neutral (sm)</Button>
          <Button controlSize="sm" tone="danger">Danger (sm)</Button>
        </Inline>
        <Inline gap="sm">
          <Button controlSize="md" tone="primary">Primary (md)</Button>
          <Button controlSize="md" tone="neutral">Neutral (md)</Button>
          <Button controlSize="md" tone="danger">Danger (md)</Button>
        </Inline>
        <Inline gap="sm">
          <Button controlSize="lg" tone="primary">Primary (lg)</Button>
          <Button controlSize="lg" tone="neutral">Neutral (lg)</Button>
          <Button controlSize="lg" tone="danger">Danger (lg)</Button>
        </Inline>
      </Stack>
    );
  }
};
