import { Pagination, Stack } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Pagination", component: Pagination, tags: ["autodocs"] };
export default meta;

function Demo() {
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

export const Showcase = { render: function Render() { return <Demo />; } };
