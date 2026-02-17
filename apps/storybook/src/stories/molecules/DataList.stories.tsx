import { DataList } from "@vibed/design-system";

const meta = { title: "Molecules/DataList", component: DataList, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <DataList
        items={[
          { id: "i1", label: "Workspace", value: "Orange Motion", description: "Primary workspace" },
          { id: "i2", label: "Region", value: "US-East", description: "Data residency" },
          { id: "i3", label: "Automation count", value: "14", description: "Across all teams" }
        ]}
      />
    );
  }
};
