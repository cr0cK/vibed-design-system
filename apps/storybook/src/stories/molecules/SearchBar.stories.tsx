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

export const Playground = {
  args: { controlSize: "md", placeholder: "Search automations", disabled: false },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    placeholder: { control: "text" },
    disabled: { control: "boolean" }
  },
  render: function Render(args: any) {
    return <SearchBar controlSize={args.controlSize} placeholder={args.placeholder} disabled={args.disabled} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

