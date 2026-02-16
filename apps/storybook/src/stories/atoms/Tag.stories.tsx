import { Inline, Tag } from "@vibed/design-system";

const meta = { title: "Atoms/Tag", component: Tag, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm" align="center">
        <Tag tone="neutral">Neutral</Tag>
        <Tag tone="primary">Primary</Tag>
        <Tag tone="success">Healthy</Tag>
        <Tag tone="danger">Blocked</Tag>
      </Inline>
    );
  }
};
