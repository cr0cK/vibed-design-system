import { Pagination, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Pagination", component: Pagination, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [pageSm, setPageSm] = useState(2);
  const [pageMd, setPageMd] = useState(4);
  const [pageLg, setPageLg] = useState(6);

  return (
    <Stack gap="sm">
      <Pagination controlSize="sm" page={pageSm} totalPages={8} onPageChange={setPageSm} />
      <Pagination controlSize="md" page={pageMd} totalPages={8} onPageChange={setPageMd} />
      <Pagination controlSize="lg" page={pageLg} totalPages={8} onPageChange={setPageLg} />
    </Stack>
  );
  }
};

export const Playground = {
  args: { controlSize: "md", page: 4, totalPages: 8 },
  argTypes: {
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    page: { control: { type: "number", min: 1, max: 20, step: 1 } },
    totalPages: { control: { type: "number", min: 1, max: 50, step: 1 } }
  },
  render: function Render(args: any) {
    return <Pagination controlSize={args.controlSize} page={args.page} totalPages={args.totalPages} onPageChange={function onPageChange() {}} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

