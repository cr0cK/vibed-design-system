import { Badge, Box, Button, DesignSystemProvider, Grid, Heading, Inline, Input, Select, Stack, Text, Textarea, neoMintTheme, orangeMotionTheme } from "@vibed/design-system";
import { useMemo } from "react";

const meta = {
  title: "Themes/Workspace Template",
  component: DesignSystemProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

type ThemeOption = "default-light" | "default-dark" | "orange-motion" | "neo-mint";

interface WorkspaceTemplateProps {
  compact?: boolean;
}

function WorkspaceTemplate(props: WorkspaceTemplateProps) {
  const shellMinHeight = props.compact ? "auto" : "screen";
  const sidePadding = props.compact ? "md" : "lg";
  const mainPadding = props.compact ? "lg" : "xl";
  const panelPadding = props.compact ? "md" : "lg";
  const stackGap = props.compact ? "md" : "lg";

  const sidebar = (
    <Box as="aside" padding={sidePadding} surface="surface" border="subtle" borderSide="right">
      <Stack gap={stackGap}>
        <Heading level={5}>Control Center</Heading>
        <Stack gap="sm">
          <Text size="sm" tone="muted">Overview</Text>
          <Text size="sm" tone="muted">Channels</Text>
          <Text size="sm" tone="muted">Automations</Text>
          <Box surface="muted" radius="sm" padding="sm">
            <Text size="sm" weight="semibold">Digest Builder</Text>
          </Box>
          <Text size="sm" tone="muted">Audiences</Text>
          <Text size="sm" tone="muted">Settings</Text>
        </Stack>
        <Box surface="elevated" radius="md" padding="sm">
          <Stack gap="xxs">
            <Text size="sm" weight="semibold">Performance</Text>
            <Text size="sm" tone="muted">3 workflows active this week</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );

  const mainContent = (
    <Box as="main" padding={mainPadding} border="subtle" borderSide="right">
      <Stack gap={stackGap}>
        <Stack gap="sm">
          <Inline justify="between" align="center">
            <Heading level={2}>Automations</Heading>
            <Button tone="primary" controlSize="sm">New automation</Button>
          </Inline>
          <Text tone="muted">Schedule and monitor recurring updates for your team.</Text>
        </Stack>

        <Grid columns={3} gap="sm">
          <Box surface="elevated" radius="md" padding="md">
            <Stack gap="xxs">
              <Text size="sm" tone="muted">Active</Text>
              <Heading level={4}>24</Heading>
            </Stack>
          </Box>
          <Box surface="elevated" radius="md" padding="md">
            <Stack gap="xxs">
              <Text size="sm" tone="muted">Paused</Text>
              <Heading level={4}>5</Heading>
            </Stack>
          </Box>
          <Box surface="elevated" radius="md" padding="md">
            <Stack gap="xxs">
              <Text size="sm" tone="muted">Errors</Text>
              <Heading level={4}>1</Heading>
            </Stack>
          </Box>
        </Grid>

        <Box surface="surface" radius="md" border="subtle" overflow="hidden">
          <Box padding="md" border="subtle" borderSide="bottom">
            <Inline justify="between" align="center">
              <Text weight="semibold" size="sm">Workflow</Text>
              <Text weight="semibold" size="sm">Status</Text>
            </Inline>
          </Box>
          <Box padding="md" border="subtle" borderSide="bottom">
            <Inline justify="between" align="center">
              <Text size="sm">Morning Pulse</Text>
              <Badge tone="success">Live</Badge>
            </Inline>
          </Box>
          <Box padding="md" border="subtle" borderSide="bottom">
            <Inline justify="between" align="center">
              <Text size="sm">Ops Digest</Text>
              <Badge tone="neutral">Paused</Badge>
            </Inline>
          </Box>
          <Box padding="md">
            <Inline justify="between" align="center">
              <Text size="sm">Leadership Weekly</Text>
              <Badge tone="neutral">Draft</Badge>
            </Inline>
          </Box>
        </Box>
      </Stack>
    </Box>
  );

  const formPanel = (
    <Box as="aside" padding={panelPadding}>
      <Stack gap={stackGap}>
        <Heading level={3}>Create Automation</Heading>
        <Text tone="muted" size="sm">Compose the next digest with structured controls.</Text>

        <Stack gap="xs">
          <Text size="sm" weight="semibold">Name</Text>
          <Input placeholder="Enter workflow name" />
        </Stack>
        <Stack gap="xs">
          <Text size="sm" weight="semibold">Subject</Text>
          <Input defaultValue="Your team update" />
        </Stack>
        <Stack gap="xs">
          <Text size="sm" weight="semibold">Recipients</Text>
          <Textarea rows={3} placeholder="Add recipients" />
        </Stack>
        <Inline gap="sm" align="start">
          <Box flex="field">
            <Stack gap="xs">
              <Text size="sm" weight="semibold">Time</Text>
              <Input defaultValue="9:00 AM" />
            </Stack>
          </Box>
          <Box flex="field">
            <Stack gap="xs">
              <Text size="sm" weight="semibold">Timezone</Text>
              <Select defaultValue="et">
                <option value="et">ET</option>
                <option value="pt">PT</option>
              </Select>
            </Stack>
          </Box>
        </Inline>
        <Box surface="muted" radius="sm" padding="md">
          <Stack gap="xxs">
            <Inline gap="xxs">
              <Text size="sm" weight="semibold">Schedule:</Text>
              <Text size="sm">Weekdays at 9:00 AM ET</Text>
            </Inline>
            <Inline gap="xxs">
              <Text size="sm" weight="semibold" tone="muted">Next run:</Text>
              <Text size="sm" tone="muted">Tomorrow at 9:00 AM ET</Text>
            </Inline>
          </Stack>
        </Box>
        <Inline justify="end" gap="xs">
          <Button tone="neutral">Cancel</Button>
          <Button tone="primary">Launch</Button>
        </Inline>
      </Stack>
    </Box>
  );

  if (props.compact) {
    return (
      <Box surface="background" minHeight={shellMinHeight}>
        <Stack gap="none">
          {sidebar}
          {mainContent}
          {formPanel}
        </Stack>
      </Box>
    );
  }

  return (
    <Box surface="background" minHeight={shellMinHeight}>
      <Grid template="app-shell" minHeight={shellMinHeight}>
        {sidebar}
        {mainContent}
        {formPanel}
      </Grid>
    </Box>
  );
}

function WorkspaceWithTheme(props: { selectedTheme: ThemeOption; compact?: boolean }) {
  const providerProps = useMemo(function resolveThemeProps() {
    if (props.selectedTheme === "default-dark") {
      return { mode: "dark" as const, theme: undefined };
    }
    if (props.selectedTheme === "orange-motion") {
      return { mode: "light" as const, theme: orangeMotionTheme };
    }
    if (props.selectedTheme === "neo-mint") {
      return { mode: "light" as const, theme: neoMintTheme };
    }

    return { mode: "light" as const, theme: undefined };
  }, [props.selectedTheme]);

  return (
    <DesignSystemProvider mode={providerProps.mode} theme={providerProps.theme}>
      <WorkspaceTemplate compact={props.compact} />
    </DesignSystemProvider>
  );
}

export const Gallery = {
  render: function Render() {
    return (
      <Stack gap="md">
        <Box surface="surface" border="subtle" radius="lg" overflow="hidden">
          <Box padding="sm" border="subtle" borderSide="bottom">
            <Heading level={4}>Default Light</Heading>
          </Box>
          <WorkspaceWithTheme selectedTheme="default-light" compact />
        </Box>
        <Box surface="surface" border="subtle" radius="lg" overflow="hidden">
          <Box padding="sm" border="subtle" borderSide="bottom">
            <Heading level={4}>Default Dark</Heading>
          </Box>
          <WorkspaceWithTheme selectedTheme="default-dark" compact />
        </Box>
        <Box surface="surface" border="subtle" radius="lg" overflow="hidden">
          <Box padding="sm" border="subtle" borderSide="bottom">
            <Heading level={4}>Orange Motion</Heading>
          </Box>
          <WorkspaceWithTheme selectedTheme="orange-motion" compact />
        </Box>
        <Box surface="surface" border="subtle" radius="lg" overflow="hidden">
          <Box padding="sm" border="subtle" borderSide="bottom">
            <Heading level={4}>Neo Mint</Heading>
          </Box>
          <WorkspaceWithTheme selectedTheme="neo-mint" compact />
        </Box>
      </Stack>
    );
  }
};

export const DefaultLight = {
  render: function Render() {
    return <WorkspaceWithTheme selectedTheme="default-light" compact />;
  }
};

export const DefaultDark = {
  render: function Render() {
    return <WorkspaceWithTheme selectedTheme="default-dark" compact />;
  }
};

export const OrangeMotion = {
  render: function Render() {
    return <WorkspaceWithTheme selectedTheme="orange-motion" compact />;
  }
};

export const NeoMint = {
  render: function Render() {
    return <WorkspaceWithTheme selectedTheme="neo-mint" compact />;
  }
};
