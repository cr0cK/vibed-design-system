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
