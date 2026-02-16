import { Badge, Box, Button, DesignSystemProvider, Grid, Heading, Inline, Input, Select, Stack, Text, Textarea, revenueRecoveryTheme } from "@vibed/design-system";

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
        <Box surface="background" minHeight="screen">
          <Grid template="app-shell" minHeight="screen">
          <Box as="aside" padding="md" surface="surface" border="subtle" borderSide="right">
            <Stack gap="sm">
              <Heading level={5}>Revenue Recovery</Heading>
              <Text size="sm" tone="muted">Dashboard</Text>
              <Text size="sm" tone="muted">EHR Connections</Text>
              <Text size="sm" tone="muted">Claim Flow</Text>
              <Box surface="muted" radius="sm" padding="sm">
                <Text size="sm" weight="semibold">Email Digest</Text>
              </Box>
              <Text size="sm" tone="muted">Configuration</Text>
            </Stack>
          </Box>

          <Box as="main" padding="lg" border="subtle" borderSide="right">
            <Stack gap="md">
              <Heading level={2}>Email Digest</Heading>
              <Text tone="muted">Create, edit and manage your automated email digest schedules.</Text>

              <Box surface="surface" radius="sm" border="subtle" overflow="hidden">
                <Box padding="sm" border="subtle" borderSide="bottom">
                  <Inline justify="between" align="center">
                    <Text weight="semibold" size="sm">Title</Text>
                    <Text weight="semibold" size="sm">Frequency</Text>
                  </Inline>
                </Box>
                <Box padding="sm" border="subtle" borderSide="bottom">
                  <Inline justify="between" align="center">
                    <Text size="sm">Daily Digest</Text>
                    <Badge tone="neutral">Daily</Badge>
                  </Inline>
                </Box>
                <Box padding="sm" border="subtle" borderSide="bottom">
                  <Inline justify="between" align="center">
                    <Text size="sm">Quarter Digest all organizations</Text>
                    <Badge tone="neutral">Quarterly</Badge>
                  </Inline>
                </Box>
                <Box padding="sm">
                  <Inline justify="between" align="center">
                    <Text size="sm">Weekly Digest for Organizations A-C</Text>
                    <Badge tone="neutral">Weekly</Badge>
                  </Inline>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box as="aside" padding="md">
            <Stack gap="md">
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
              <Text size="sm" tone="muted" align="right">20/100 emails</Text>
            </Stack>

            <Stack gap="xs">
              <Text size="sm" weight="semibold">Start On</Text>
              <Input defaultValue="2/2/2026" />
            </Stack>

            <Inline gap="sm" align="start">
              <Box flex="field">
                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Time</Text>
                  <Input defaultValue="9:00AM" />
                </Stack>
              </Box>
              <Box flex="field">
                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Timezone</Text>
                  <Select defaultValue="et">
                    <option value="et">ET - Eastern Time (US & Canada)</option>
                  </Select>
                </Stack>
              </Box>
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
              <Stack gap="xxs">
                <Inline gap="xxs">
                  <Text size="sm" weight="semibold">Schedule:</Text>
                  <Text size="sm">Every day at 9:00AM ET</Text>
                </Inline>
                <Inline gap="xxs">
                  <Text size="sm" weight="semibold" tone="muted">Next send:</Text>
                  <Text size="sm" tone="muted">Tue, Feb 3, 2026 at 9:00AM ET</Text>
                </Inline>
              </Stack>
            </Box>

            <Box mt="xs" pt="sm" border="subtle" borderSide="top">
              <Inline justify="end" gap="xs">
                <Button tone="neutral">Cancel</Button>
                <Button tone="primary">Create Digest Schedule</Button>
              </Inline>
            </Box>
            </Stack>
          </Box>
          </Grid>
        </Box>
      </DesignSystemProvider>
    );
  }
};
