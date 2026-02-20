import { AvatarGroup } from "@vibed/design-system";

const meta = { title: "Molecules/AvatarGroup", component: AvatarGroup, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <AvatarGroup
        max={4}
        items={[
          { id: "u1", name: "Olivia Jones" },
          { id: "u2", name: "Liam Smith" },
          { id: "u3", name: "Emma Brown" },
          { id: "u4", name: "Noah Johnson" },
          { id: "u5", name: "Ava Williams" }
        ]}
      />
    );
  }
};

export const Playground = {
  args: { max: 4 },
  argTypes: { max: { control: { type: "number", min: 1, max: 8, step: 1 } } },
  render: function Render(args: any) {
    return (
      <AvatarGroup
        max={args.max}
        items={[
          { id: "u1", name: "Olivia Jones" },
          { id: "u2", name: "Liam Smith" },
          { id: "u3", name: "Emma Brown" },
          { id: "u4", name: "Noah Johnson" },
          { id: "u5", name: "Ava Williams" }
        ]}
      />
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

