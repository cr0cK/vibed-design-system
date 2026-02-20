import { Button, ButtonGroup } from "@vibed/design-system";

const meta = { title: "Atoms/ButtonGroup", component: ButtonGroup, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <ButtonGroup>
        <Button tone="neutral">Back</Button>
        <Button tone="primary">Save</Button>
      </ButtonGroup>
    );
  }
};

export const Playground = {
  args: {
    direction: "row",
    gap: "xs"
  },
  argTypes: {
    direction: { control: "select", options: ["row", "column"] },
    gap: { control: "select", options: ["xs", "sm", "md"] }
  },
  render: function Render(args: any) {
    return (
      <ButtonGroup direction={args.direction} gap={args.gap}>
        <Button tone="neutral">Back</Button>
        <Button tone="primary">Save</Button>
      </ButtonGroup>
    );
  }
};

