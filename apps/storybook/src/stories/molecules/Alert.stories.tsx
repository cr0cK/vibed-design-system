import { Alert, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/Alert", component: Alert, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Alert tone="neutral" title="Info">Neutral alert message.</Alert>
        <Alert tone="success" title="Success">Build completed successfully.</Alert>
        <Alert tone="danger" title="Error">Unable to publish package.</Alert>
      </Stack>
    );
  }
};
