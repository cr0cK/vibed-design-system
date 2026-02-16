import { Button, Tooltip } from "@vibed/design-system";

const meta = { title: "Organisms/Tooltip", component: Tooltip, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Tooltip tooltipContent="Helpful hint">
        <Button tone="neutral" size="sm">Hover me</Button>
      </Tooltip>
    );
  }
};
