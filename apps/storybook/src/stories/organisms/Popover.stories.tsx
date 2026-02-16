import { Popover, Text } from "@vibed/design-system";

const meta = { title: "Organisms/Popover", component: Popover, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return <Popover triggerLabel="Open popover" popoverContent={<Text size="sm">Popover content</Text>} />;
  }
};
