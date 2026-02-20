import { Skeleton, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Skeleton", component: Skeleton, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Skeleton width="12rem" />
        <Skeleton width="100%" height="2.4rem" />
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    width: "100%",
    height: "2.4rem"
  },
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
  },
  render: function Render(args: any) {
    return <Skeleton width={args.width} height={args.height} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

