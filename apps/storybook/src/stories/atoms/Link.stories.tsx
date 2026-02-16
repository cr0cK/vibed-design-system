import { Link, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/Link", component: Link, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Link href="#">Default link</Link>
        <Link href="#" tone="muted">Muted link</Link>
      </Stack>
    );
  }
};
