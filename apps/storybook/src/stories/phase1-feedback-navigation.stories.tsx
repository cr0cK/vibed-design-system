import { Alert, Breadcrumb, Card, Pagination, Skeleton, Spinner, Stack, Tabs, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = {
  title: "Phase 1/Feedback + Navigation",
  component: Stack,
  tags: ["autodocs"]
};

export default meta;

function FeedbackNavigationDemo() {
  const [page, setPage] = useState(2);
  const [tab, setTab] = useState("overview");

  return (
    <Stack gap="md">
      <Breadcrumb
        items={[
          { label: "Design System", href: "#" },
          { label: "Components", href: "#" },
          { label: "Phase 1" }
        ]}
      />

      <Alert tone="success" title="Build completed">
        All phase-1 components compiled successfully.
      </Alert>

      <Card title="Loaders + Navigation" subtitle="Feedback and movement between views">
        <Stack gap="sm">
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Spinner size="md" />
            <Skeleton width="14rem" height="1rem" />
          </div>

          <Tabs
            items={[
              { id: "overview", label: "Overview" },
              { id: "tokens", label: "Tokens" },
              { id: "usage", label: "Usage" }
            ]}
            value={tab}
            onValueChange={setTab}
            panels={{
              overview: <Text>Overview content</Text>,
              tokens: <Text>Token content</Text>,
              usage: <Text>Usage content</Text>
            }}
          />

          <Pagination page={page} totalPages={8} onPageChange={setPage} />
        </Stack>
      </Card>
    </Stack>
  );
}

export const Showcase = {
  render: function Render() {
    return <FeedbackNavigationDemo />;
  }
};
