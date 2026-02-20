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

export const Playground = {
  args: {
    label: "Receive notifications",
    controlSize: "md",
    defaultChecked: true,
    disabled: false
  },
  argTypes: {
    label: { control: "text" },
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return (
      <Checkbox
        label={args.label}
        controlSize={args.controlSize}
        defaultChecked={args.defaultChecked}
        disabled={args.disabled}
      />
    );
  }
};

