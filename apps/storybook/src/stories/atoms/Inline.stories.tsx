import { Button, Inline } from "@vibed/design-system";

const meta = { title: "Atoms/Inline", component: Inline, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm">
        <Button tone="neutral">One</Button>
        <Button tone="neutral">Two</Button>
        <Button tone="neutral">Three</Button>
      </Inline>
    );
  }
};
