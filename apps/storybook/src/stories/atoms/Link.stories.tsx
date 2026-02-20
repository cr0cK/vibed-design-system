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

export const Playground = {
  args: {
    tone: "default",
    children: "Visit details"
  },
  argTypes: {
    tone: { control: "select", options: ["default", "muted"] },
    children: { control: "text" }
  },
  render: function Render(args: any) {
    return <Link href="#" tone={args.tone}>{args.children}</Link>;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

