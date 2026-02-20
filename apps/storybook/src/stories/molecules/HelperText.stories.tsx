import { HelperText, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/HelperText", component: HelperText, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Stack gap="xs">
          <HelperText controlSize="sm" tone="muted">Muted helper text (sm)</HelperText>
          <HelperText controlSize="sm" tone="success">Success helper text (sm)</HelperText>
          <HelperText controlSize="sm" tone="danger">Error helper text (sm)</HelperText>
        </Stack>
        <Stack gap="xs">
          <HelperText controlSize="md" tone="muted">Muted helper text (md)</HelperText>
          <HelperText controlSize="md" tone="success">Success helper text (md)</HelperText>
          <HelperText controlSize="md" tone="danger">Error helper text (md)</HelperText>
        </Stack>
        <Stack gap="xs">
          <HelperText controlSize="lg" tone="muted">Muted helper text (lg)</HelperText>
          <HelperText controlSize="lg" tone="success">Success helper text (lg)</HelperText>
          <HelperText controlSize="lg" tone="danger">Error helper text (lg)</HelperText>
        </Stack>
      </Stack>
    );
  }
};

export const Playground = {
  args: { controlSize: "md", tone: "muted", children: "Muted helper text" },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    tone: { control: "select", options: ["muted", "success", "danger"] },
    children: { control: "text" }
  },
  render: function Render(args: any) {
    return <HelperText controlSize={args.controlSize} tone={args.tone}>{args.children}</HelperText>;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

