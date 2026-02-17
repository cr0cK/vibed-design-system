import { Button, FilterBar, Inline, SearchBar, Select } from "@vibed/design-system";

const meta = { title: "Organisms/FilterBar", component: FilterBar, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <FilterBar
        controls={
          <Inline gap="xs">
            <SearchBar placeholder="Search automations" />
            <Select defaultValue="all">
              <option value="all">All status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </Select>
          </Inline>
        }
        actions={<Button tone="neutral">Reset</Button>}
      />
    );
  }
};
