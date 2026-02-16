import { FormControl, Select, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/FormControl", component: FormControl, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <FormControl controlSize="sm" label="Plan (sm)" htmlFor="plan-sm" hint="Pick one option">
          <Select controlSize="sm" id="plan-sm" defaultValue="starter">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
          </Select>
        </FormControl>
        <FormControl controlSize="md" label="Plan (md)" htmlFor="plan-md" hint="Pick one option">
          <Select controlSize="md" id="plan-md" defaultValue="starter">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
          </Select>
        </FormControl>
        <FormControl controlSize="lg" label="Plan (lg)" htmlFor="plan-lg" hint="Pick one option">
          <Select controlSize="lg" id="plan-lg" defaultValue="starter">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
          </Select>
        </FormControl>
      </Stack>
    );
  }
};
