import { SearchBar, Stack } from "@vibed/design-system";

const meta = { title: "Molecules/SearchBar", component: SearchBar, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <SearchBar controlSize="sm" placeholder="Search (sm)" />
        <SearchBar controlSize="md" placeholder="Search (md)" />
        <SearchBar controlSize="lg" placeholder="Search (lg)" />
      </Stack>
    );
  }
};
