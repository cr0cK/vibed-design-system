import { Field, Input, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/Field", component: Field, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Field controlSize="sm" inputId="team-name-sm" label="Team name (sm)" hint="Used in release notifications">
          <Input controlSize="sm" id="team-name-sm" placeholder="Core UI" />
        </Field>
        <Field controlSize="md" inputId="team-name-md" label="Team name (md)" hint="Used in release notifications">
          <Input controlSize="md" id="team-name-md" placeholder="Core UI" />
        </Field>
        <Field controlSize="lg" inputId="team-name-lg" label="Team name (lg)" hint="Used in release notifications">
          <Input controlSize="lg" id="team-name-lg" placeholder="Core UI" />
        </Field>
      </Stack>
    );
  }
};
