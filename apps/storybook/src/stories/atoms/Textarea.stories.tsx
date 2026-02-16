import { Textarea } from "@vibed/design-system";

const meta = { title: "Atoms/Textarea", component: Textarea, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return <Textarea rows={4} placeholder="Write a short summary" />;
  }
};
