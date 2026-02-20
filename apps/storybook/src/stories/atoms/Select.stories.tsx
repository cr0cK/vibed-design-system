import { Select, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Select", component: Select, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Select controlSize="sm" defaultValue="team">
          <option value="team">Team</option>
          <option value="enterprise">Enterprise</option>
        </Select>
        <Select controlSize="md" defaultValue="team">
          <option value="team">Team</option>
          <option value="enterprise">Enterprise</option>
        </Select>
        <Select controlSize="lg" defaultValue="team">
          <option value="team">Team</option>
          <option value="enterprise">Enterprise</option>
        </Select>
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    controlSize: "md",
    defaultValue: "team",
    disabled: false
  },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    defaultValue: { control: "select", options: ["team", "enterprise"] },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return (
      <Select controlSize={args.controlSize} defaultValue={args.defaultValue} disabled={args.disabled}>
        <option value="team">Team</option>
        <option value="enterprise">Enterprise</option>
      </Select>
    );
  }
};

