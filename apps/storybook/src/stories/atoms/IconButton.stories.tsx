import { IconButton, Inline, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/IconButton", component: IconButton, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Inline gap="sm">
          <IconButton controlSize="sm" label="Add" icon={<span aria-hidden="true">+</span>} tone="primary" />
          <IconButton controlSize="sm" label="Delete" icon={<span aria-hidden="true">x</span>} tone="danger" />
        </Inline>
        <Inline gap="sm">
          <IconButton controlSize="md" label="Add" icon={<span aria-hidden="true">+</span>} tone="primary" />
          <IconButton controlSize="md" label="Delete" icon={<span aria-hidden="true">x</span>} tone="danger" />
        </Inline>
        <Inline gap="sm">
          <IconButton controlSize="lg" label="Add" icon={<span aria-hidden="true">+</span>} tone="primary" />
          <IconButton controlSize="lg" label="Delete" icon={<span aria-hidden="true">x</span>} tone="danger" />
        </Inline>
      </Stack>
    );
  }
};
