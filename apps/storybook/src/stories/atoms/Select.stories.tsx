import { Select } from "@vibed/design-system";

const meta = { title: "Atoms/Select", component: Select, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Select defaultValue="team">
        <option value="team">Team</option>
        <option value="enterprise">Enterprise</option>
      </Select>
    );
  }
};
