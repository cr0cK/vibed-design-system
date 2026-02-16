import { Button, Inline } from "@vibed/design-system";

const meta = { title: "Atoms/Button", component: Button, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm">
        <Button tone="primary">Primary</Button>
        <Button tone="neutral">Neutral</Button>
        <Button tone="danger">Danger</Button>
      </Inline>
    );
  }
};
