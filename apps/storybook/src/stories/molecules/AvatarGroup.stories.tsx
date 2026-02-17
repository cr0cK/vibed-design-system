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
