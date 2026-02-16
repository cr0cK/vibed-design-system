import { Badge, Box, Button, DesignSystemProvider, Grid, Heading, Inline, Input, Select, Stack, Text, Textarea, orangeMotionTheme } from "@vibed/design-system";

const meta = {
  title: "Themes/Orange Motion Workspace",
  component: DesignSystemProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <DesignSystemProvider theme={orangeMotionTheme}>
        <Box surface="background" minHeight="screen">
          <Grid template="app-shell" minHeight="screen">
            <Box as="aside" padding="md" surface="surface" border="subtle" borderSide="right">
              <Stack gap="sm">
                <Heading level={5}>Orange Motion</Heading>
                <Text size="sm" tone="muted">Home</Text>
                <Text size="sm" tone="muted">Signals</Text>
                <Text size="sm" tone="muted">Campaigns</Text>
                <Box surface="muted" radius="sm" padding="sm">
                  <Text size="sm" weight="semibold">Brief Builder</Text>
                </Box>
                <Text size="sm" tone="muted">Library</Text>
                <Text size="sm" tone="muted">Settings</Text>
              </Stack>
            </Box>

            <Box as="main" padding="lg" border="subtle" borderSide="right">
              <Stack gap="md">
                <Heading level={2}>Automations</Heading>
                <Text tone="muted">Manage recurring brief deliveries for your team.</Text>

                <Box surface="surface" radius="sm" border="subtle" overflow="hidden">
                  <Box padding="sm" border="subtle" borderSide="bottom">
                    <Inline justify="between" align="center">
                      <Text weight="semibold" size="sm">Workflow</Text>
                      <Text weight="semibold" size="sm">Cadence</Text>
                    </Inline>
                  </Box>
                  <Box padding="sm" border="subtle" borderSide="bottom">
                    <Inline justify="between" align="center">
                      <Text size="sm">Morning Pulse</Text>
                      <Badge tone="neutral">Daily</Badge>
                    </Inline>
                  </Box>
                  <Box padding="sm" border="subtle" borderSide="bottom">
                    <Inline justify="between" align="center">
                      <Text size="sm">Ops Snapshot</Text>
                      <Badge tone="neutral">Weekly</Badge>
                    </Inline>
                  </Box>
                  <Box padding="sm">
                    <Inline justify="between" align="center">
                      <Text size="sm">Leadership Highlights</Text>
                      <Badge tone="neutral">Monthly</Badge>
                    </Inline>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Box as="aside" padding="md">
              <Stack gap="md">
                <Heading level={2}>Create Automation</Heading>
                <Text tone="muted" size="sm">Set up a recurring brief delivery flow for your audience.</Text>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Brief Name</Text>
                  <Input placeholder="Enter workflow name" />
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Subject</Text>
                  <Input defaultValue="Your Weekly Highlights" />
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Audience</Text>
                  <Textarea rows={4} placeholder="Enter recipients" />
                  <Text size="sm" tone="muted" align="right">20/100 contacts</Text>
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Start Date</Text>
                  <Input defaultValue="2/2/2026" />
                </Stack>

                <Inline gap="sm" align="start">
                  <Box flex="field">
                    <Stack gap="xs">
                      <Text size="sm" weight="semibold">Dispatch Time</Text>
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
                  <Text size="sm" weight="semibold">Cadence</Text>
                  <Select defaultValue="weekly">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </Select>
                </Stack>

                <Box surface="muted" padding="md" radius="sm">
                  <Stack gap="xxs">
                    <Inline gap="xxs">
                      <Text size="sm" weight="semibold">Schedule:</Text>
                      <Text size="sm">Every week on Monday at 9:00AM ET</Text>
                    </Inline>
                    <Inline gap="xxs">
                      <Text size="sm" weight="semibold" tone="muted">Next run:</Text>
                      <Text size="sm" tone="muted">Mon, Feb 23, 2026 at 9:00AM ET</Text>
                    </Inline>
                  </Stack>
                </Box>

                <Box mt="xs" pt="sm" border="subtle" borderSide="top">
                  <Inline justify="end" gap="xs">
                    <Button tone="neutral">Save Draft</Button>
                    <Button tone="primary">Launch Automation</Button>
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
