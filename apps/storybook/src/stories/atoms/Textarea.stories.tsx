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

export const Playground = {
  args: {
    controlSize: "md",
    rows: 3,
    placeholder: "Write a short summary",
    disabled: false,
    invalid: false
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    rows: { control: "number" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <Textarea controlSize={args.controlSize} rows={args.rows} placeholder={args.placeholder} disabled={args.disabled} invalid={args.invalid} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

