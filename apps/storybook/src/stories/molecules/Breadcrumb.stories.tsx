import { Breadcrumb } from "@vibed/design-system";

const meta = { title: "Molecules/Breadcrumb", component: Breadcrumb, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Components", href: "#" }, { label: "Breadcrumb" }]} />
    );
  }
};

export const Playground = {
  args: { currentLabel: "Breadcrumb" },
  argTypes: { currentLabel: { control: "text" } },
  render: function Render(args: any) {
    return <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Components", href: "#" }, { label: args.currentLabel }]} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

