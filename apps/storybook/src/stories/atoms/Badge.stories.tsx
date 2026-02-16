import { Badge, Inline } from "@vibed/design-system";

const meta = { title: "Atoms/Badge", component: Badge, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm">
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="primary">Primary</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="danger">Danger</Badge>
      </Inline>
    );
  }
};
