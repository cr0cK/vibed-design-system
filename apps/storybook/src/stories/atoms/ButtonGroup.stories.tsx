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
