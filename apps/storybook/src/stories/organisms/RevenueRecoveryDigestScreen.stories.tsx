import { Badge, Box, Button, DesignSystemProvider, Heading, Input, Inline, Select, Stack, Text, Textarea, revenueRecoveryTheme } from "@vibed/design-system";

const meta = {
  title: "Organisms/Revenue Recovery Digest Screen",
  component: DesignSystemProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const ScreenshotStyle = {
  render: function Render() {
    return (
      <DesignSystemProvider theme={revenueRecoveryTheme}>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 540px", minHeight: "100vh", backgroundColor: "var(--ds-color-background)" }}>
          <aside style={{ borderRight: "1px solid var(--ds-color-border)", backgroundColor: "var(--ds-color-surface)", padding: "1rem", display: "grid", alignContent: "start", gap: "0.85rem" }}>
            <Heading level={5}>Revenue Recovery</Heading>
            <Text size="sm" tone="muted">Dashboard</Text>
            <Text size="sm" tone="muted">EHR Connections</Text>
            <Text size="sm" tone="muted">Claim Flow</Text>
            <Box surface="muted" radius="sm" padding="sm">
              <Text size="sm" weight="semibold">Email Digest</Text>
            </Box>
            <Text size="sm" tone="muted">Configuration</Text>
          </aside>

          <main style={{ padding: "1.5rem", borderRight: "1px solid var(--ds-color-border)", display: "grid", alignContent: "start", gap: "1rem" }}>
            <Heading level={2}>Email Digest</Heading>
            <Text tone="muted">Create, edit and manage your automated email digest schedules.</Text>

            <div style={{ border: "1px solid var(--ds-color-border)", borderRadius: "var(--ds-radius-sm)", backgroundColor: "var(--ds-color-surface)", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "0.75rem 0.9rem", borderBottom: "1px solid var(--ds-color-border)", alignItems: "center" }}>
                <Text weight="semibold" size="sm">Title</Text>
                <Text weight="semibold" size="sm">Frequency</Text>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "0.75rem 0.9rem", borderBottom: "1px solid var(--ds-color-border)", alignItems: "center" }}>
                <Text size="sm">Daily Digest</Text>
                <Badge tone="neutral">Daily</Badge>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "0.75rem 0.9rem", borderBottom: "1px solid var(--ds-color-border)", alignItems: "center" }}>
                <Text size="sm">Quarter Digest all organizations</Text>
                <Badge tone="neutral">Quarterly</Badge>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "0.75rem 0.9rem", alignItems: "center" }}>
                <Text size="sm">Weekly Digest for Organizations A-C</Text>
                <Badge tone="neutral">Weekly</Badge>
              </div>
            </div>
          </main>

          <aside style={{ padding: "1.25rem", display: "grid", alignContent: "start", gap: "0.9rem" }}>
            <Heading level={2}>New Digest Schedule</Heading>
            <Text tone="muted" size="sm">Create a new schedule to send recurring emails summarizing key information from Revenue Recovery.</Text>

            <Stack gap="xs">
              <Text size="sm" weight="semibold">Title</Text>
              <Input placeholder="Enter title" />
            </Stack>

            <Stack gap="xs">
              <Text size="sm" weight="semibold">Email Subject Line</Text>
              <Input defaultValue="Your Revenue Digest" />
            </Stack>

            <Stack gap="xs">
              <Text size="sm" weight="semibold">Recipient Email(s)</Text>
              <Textarea rows={4} placeholder="Enter recipients" />
              <Text size="sm" tone="muted" style={{ textAlign: "right" }}>20/100 emails</Text>
            </Stack>

            <Stack gap="xs">
              <Text size="sm" weight="semibold">Start On</Text>
              <Input defaultValue="2/2/2026" />
            </Stack>

            <Inline gap="sm">
              <Stack gap="xs" style={{ flex: 1 }}>
                <Text size="sm" weight="semibold">Time</Text>
                <Input defaultValue="9:00AM" />
              </Stack>
              <Stack gap="xs" style={{ flex: 1 }}>
                <Text size="sm" weight="semibold">Timezone</Text>
                <Select defaultValue="et">
                  <option value="et">ET - Eastern Time (US & Canada)</option>
                </Select>
              </Stack>
            </Inline>

            <Stack gap="xs">
              <Text size="sm" weight="semibold">Frequency</Text>
              <Select defaultValue="daily">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="quarterly">Quarterly</option>
              </Select>
            </Stack>

            <Box surface="muted" padding="md" radius="sm">
              <Text size="sm"><strong>Schedule:</strong> Every day at 9:00AM ET</Text>
              <Text size="sm" tone="muted" style={{ marginTop: "0.35rem" }}><strong>Next send:</strong> Tue, Feb 3, 2026 at 9:00AM ET</Text>
            </Box>

            <div style={{ position: "sticky", bottom: 0, display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--ds-color-border)", backgroundColor: "var(--ds-color-background)" }}>
              <Button tone="neutral">Cancel</Button>
              <Button tone="primary">Create Digest Schedule</Button>
            </div>
          </aside>
        </div>
      </DesignSystemProvider>
    );
  }
};
