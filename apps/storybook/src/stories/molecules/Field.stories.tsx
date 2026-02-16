import { Field, Input } from "@vibed/design-system";

const meta = { title: "Molecules/Field", component: Field, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Field inputId="team-name" label="Team name" hint="Used in release notifications">
        <Input id="team-name" placeholder="Core UI" />
      </Field>
    );
  }
};
