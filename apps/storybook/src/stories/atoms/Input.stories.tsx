import { Input, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Input", component: Input, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Input controlSize="sm" placeholder="Email (sm)" />
        <Input controlSize="md" placeholder="Email (md)" />
        <Input controlSize="lg" placeholder="Email (lg)" />
        <Input placeholder="Invalid state" invalid />
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    controlSize: "md",
    placeholder: "Email",
    invalid: false,
    disabled: false
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    placeholder: { control: "text" },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <Input controlSize={args.controlSize} placeholder={args.placeholder} invalid={args.invalid} disabled={args.disabled} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

