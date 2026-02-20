import { Button, FilterBar, Inline, SearchBar, Select } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/FilterBar", component: FilterBar, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all");

    return (
      <FilterBar
        controls={
          <Inline gap="xs">
            <SearchBar
              placeholder="Search automations"
              value={query}
              onChange={function onChange(event) {
                setQuery(event.target.value);
              }}
            />
            <Select
              value={status}
              onChange={function onChange(event) {
                setStatus(event.target.value);
              }}
            >
              <option value="all">All status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </Select>
          </Inline>
        }
        actions={
          <Button
            tone="neutral"
            onClick={function onClick() {
              setQuery("");
              setStatus("all");
            }}
          >
            Reset
          </Button>
        }
      />
    );
  }
};

export const Playground = {
  args: { showActions: true },
  argTypes: { showActions: { control: "boolean" } },
  render: function Render(args: any) {
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
        actions={args.showActions ? <Button tone="neutral">Reset</Button> : undefined}
      />
    );
  }
};

