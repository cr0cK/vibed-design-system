import { Pagination } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/Pagination", component: Pagination, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [page, setPage] = useState(2);
  return <Pagination page={page} totalPages={8} onPageChange={setPage} />;
}

export const Showcase = { render: function Render() { return <Demo />; } };
