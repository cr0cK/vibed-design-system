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
