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
