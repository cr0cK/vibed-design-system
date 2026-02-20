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

export const Playground = {
  args: {
    controlSize: "md",
    defaultValue: "2026-02-18",
    disabled: false
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <DatePicker controlSize={args.controlSize} defaultValue={args.defaultValue} disabled={args.disabled} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

