import { IconButton, Inline } from "@vibed/design-system";

const meta = { title: "Atoms/IconButton", component: IconButton, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm">
        <IconButton label="Add" icon={<span aria-hidden="true">+</span>} tone="primary" />
        <IconButton label="Delete" icon={<span aria-hidden="true">x</span>} tone="danger" />
      </Inline>
    );
  }
};
