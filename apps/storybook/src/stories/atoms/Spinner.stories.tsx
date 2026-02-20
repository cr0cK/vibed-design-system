import { Inline, Spinner } from "@vibed/design-system";

const meta = { title: "Atoms/Spinner", component: Spinner, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Inline gap="sm" align="center">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </Inline>
    );
  }
};

export const Playground = {
  args: {
    size: "md"
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] }
  },
  render: function Render(args: any) {
    return <Spinner size={args.size} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

