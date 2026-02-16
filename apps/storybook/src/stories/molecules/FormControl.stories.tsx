import { FormControl, Select } from "@vibed/design-system";

const meta = { title: "Molecules/FormControl", component: FormControl, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <FormControl label="Plan" htmlFor="plan" hint="Pick one option">
        <Select id="plan" defaultValue="starter">
          <option value="starter">Starter</option>
          <option value="pro">Pro</option>
        </Select>
      </FormControl>
    );
  }
};
