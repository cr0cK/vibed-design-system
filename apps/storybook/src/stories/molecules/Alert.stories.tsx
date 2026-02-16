import { Alert, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/Alert", component: Alert, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Alert controlSize="sm" tone="neutral" title="Info (sm)">Neutral alert message.</Alert>
        <Alert controlSize="sm" tone="success" title="Success (sm)">Build completed successfully.</Alert>
        <Alert controlSize="sm" tone="danger" title="Error (sm)">Unable to publish package.</Alert>
        <Alert controlSize="md" tone="neutral" title="Info (md)">Neutral alert message.</Alert>
        <Alert controlSize="md" tone="success" title="Success (md)">Build completed successfully.</Alert>
        <Alert controlSize="md" tone="danger" title="Error (md)">Unable to publish package.</Alert>
        <Alert controlSize="lg" tone="neutral" title="Info (lg)">Neutral alert message.</Alert>
        <Alert controlSize="lg" tone="success" title="Success (lg)">Build completed successfully.</Alert>
        <Alert controlSize="lg" tone="danger" title="Error (lg)">Unable to publish package.</Alert>
      </Stack>
    );
  }
};
