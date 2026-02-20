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

export const Playground = {
  args: { defaultDurationMs: 4500 },
  argTypes: { defaultDurationMs: { control: "number" } },
  render: function Render(args: any) {
    return <ToastViewport defaultDurationMs={args.defaultDurationMs} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

