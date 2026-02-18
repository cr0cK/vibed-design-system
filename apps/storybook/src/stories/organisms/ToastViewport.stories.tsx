import { Button, Stack, ToastViewport, useToastStore } from "@vibed/design-system";

const meta = { title: "Organisms/ToastViewport", component: ToastViewport, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const pushToast = useToastStore(function getPush(state) {
    return state.pushToast;
  });
  const clearToasts = useToastStore(function getClear(state) {
    return state.clearToasts;
  });

  return (
    <>
      <Stack gap="sm">
        <Button tone="primary" onClick={function onClick() { pushToast({ title: "Automation created", description: "Your digest automation is now live.", tone: "success" }); }}>
          Push success toast
        </Button>
        <Button tone="danger" onClick={function onClick() { pushToast({ title: "Delivery failed", description: "SMTP connection timed out.", tone: "danger" }); }}>
          Push danger toast
        </Button>
        <Button tone="neutral" onClick={function onClick() { clearToasts(); }}>Clear toasts</Button>
      </Stack>
      <ToastViewport />
    </>
  );
  }
};
