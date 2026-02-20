import {
  Alert,
  Badge,
  Breadcrumb,
  Box,
  Button,
  Card,
  Checkbox,
  DesignSystemProvider,
  Drawer,
  Grid,
  Heading,
  Inline,
  Input,
  Modal,
  Navbar,
  PageHeader,
  Select,
  Sidebar,
  Stack,
  Stat,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  Textarea,
  neoMintTheme,
  orangeMotionTheme
} from "@vibed/design-system";
import { useRef, useState } from "react";

const sourceSnippet = `import { Box, Grid, Navbar, Sidebar, Breadcrumb, PageHeader, Tabs, Table, Modal, Drawer } from "@vibed/design-system";

export function FullPageDemo() {
  return (
    <Box surface="background" minHeight="screen">
      <Navbar /* header */ />
      <Grid template="app-shell">
        <Sidebar /* navigation */ />
        <Box as="main">{/* content, stats, tabs, table */}</Box>
        <Box as="aside">{/* quick form */}</Box>
      </Grid>
      <Modal /* trigger from actions */ />
      <Drawer /* trigger from actions */ />
    </Box>
  );
}`;

const meta = {
  title: "Showcase/Full Page Composition",
  component: Box,
  parameters: {
    layout: "fullscreen",
    canvasMaxWidth: "full"
  }
};

export default meta;

export const FullPage = {
  render: function Render() {
    const drawerTargetRef = useRef<HTMLDivElement | null>(null);
    const [themeId, setThemeId] = useState("default-light");
    const [activeTopNav, setActiveTopNav] = useState("workspace");
    const [activeSidebar, setActiveSidebar] = useState("digest");
    const [activeTab, setActiveTab] = useState("overview");
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [scheduleEnabled, setScheduleEnabled] = useState(true);
    const [sendDigest, setSendDigest] = useState(true);

    return (
      <DesignSystemProvider
        mode={themeId === "default-dark" ? "dark" : "light"}
        theme={themeId === "orange-motion" ? orangeMotionTheme : themeId === "neo-mint" ? neoMintTheme : undefined}
      >
        <div ref={drawerTargetRef} style={{ position: "relative" }}>
          <Box surface="background" minHeight="screen">
          <Box>
            <Navbar
              brand="Vibed Console"
              items={[
                { id: "workspace", label: "Workspace" },
                { id: "automation", label: "Automation" },
                { id: "insights", label: "Insights" }
              ]}
              activeItemId={activeTopNav}
              onItemSelect={setActiveTopNav}
              actions={(
                <Inline gap="xs" align="center">
                  <Select
                    controlSize="sm"
                    value={themeId}
                    onChange={function onChange(event) { setThemeId(event.target.value); }}
                    aria-label="Theme selector"
                    style={{ minWidth: "11.5rem" }}
                  >
                    <option value="default-light">Default Light</option>
                    <option value="default-dark">Default Dark</option>
                    <option value="orange-motion">Orange Motion</option>
                    <option value="neo-mint">Neo Mint</option>
                  </Select>
                </Inline>
              )}
            />

            <Grid template="app-shell" minHeight="screen">
              <Box as="aside" surface="surface" border="subtle" borderSide="right" style={{ minWidth: 0 }}>
              <Sidebar
                heading="Control Center"
                activeItemId={activeSidebar}
                onItemSelect={setActiveSidebar}
                groups={[
                  {
                    id: "main",
                    label: "Main",
                    items: [
                      { id: "overview", label: "Overview", icon: "◦" },
                      { id: "digest", label: "Digest Builder", icon: "◦" },
                      { id: "audience", label: "Audience", icon: "◦" }
                    ]
                  },
                  {
                    id: "system",
                    label: "System",
                    items: [
                      { id: "settings", label: "Settings", icon: "◦" },
                      { id: "billing", label: "Billing", icon: "◦", disabled: true }
                    ]
                  }
                ]}
              />
              </Box>

              <Box as="main" padding="lg" border="subtle" borderSide="right" style={{ minWidth: 0 }}>
              <Stack gap="md">
                <Breadcrumb
                  items={[
                    { label: "Workspace", href: "#" },
                    { label: "Automations", href: "#" },
                    { label: "Digest Builder" }
                  ]}
                />

                <PageHeader
                  heading="Digest Builder"
                  subtitle="Compose, schedule, and monitor recurring digests."
                  actions={(
                    <Inline gap="xs">
                      <Button tone="neutral" controlSize="sm" onClick={function onClick() { setOpenDrawer(true); }}>
                        Open drawer
                      </Button>
                      <Button controlSize="sm" onClick={function onClick() { setOpenModal(true); }}>
                        Open modal
                      </Button>
                    </Inline>
                  )}
                />

                <Alert tone="success" title="Environment healthy">
                  Delivery workers are online and queue latency is below target.
                </Alert>

                <Tabs
                  items={[
                    { id: "overview", label: "Overview" },
                    { id: "automation", label: "Automation" },
                    { id: "history", label: "History" }
                  ]}
                  value={activeTab}
                  onValueChange={setActiveTab}
                  panels={{
                    overview: (
                      <Stack gap="md">
                        <Grid columns={3} gap="sm">
                          <Stat label="Active workflows" value="24" trend="+2 this week" tone="success" />
                          <Stat label="Open issues" value="3" trend="-1 since yesterday" tone="success" />
                          <Stat label="Escalations" value="12" trend="+4 today" tone="danger" />
                        </Grid>
                        <Table
                          columns={[
                            { key: "name", header: "Automation" },
                            { key: "owner", header: "Owner" },
                            { key: "status", header: "Status", align: "right" }
                          ]}
                          rows={[
                            { id: "r1", cells: { name: "Morning Pulse", owner: "Olivia", status: <Tag tone="success">Active</Tag> } },
                            { id: "r2", cells: { name: "Ops Snapshot", owner: "Liam", status: <Tag tone="neutral">Paused</Tag> } },
                            { id: "r3", cells: { name: "Weekly Brief", owner: "Emma", status: <Tag tone="danger">Issue</Tag> } }
                          ]}
                        />
                      </Stack>
                    ),
                    automation: (
                      <Card title="Automation summary" subtitle="Current campaign">
                        <Stack gap="sm">
                          <Inline justify="between">
                            <Text size="sm">Daily Digest</Text>
                            <Badge tone="success">Live</Badge>
                          </Inline>
                          <Text size="sm" tone="muted">Runs every weekday at 9:00 AM ET</Text>
                        </Stack>
                      </Card>
                    ),
                    history: (
                      <Card title="Recent history" subtitle="Last 7 days">
                        <Stack gap="xs">
                          <Text size="sm">Mon - Delivered (12,420)</Text>
                          <Text size="sm">Tue - Delivered (12,118)</Text>
                          <Text size="sm">Wed - Delayed (retry completed)</Text>
                        </Stack>
                      </Card>
                    )
                  }}
                />

                <Card title="Source snippet" subtitle="Single-story composition pattern">
                  <Box
                    as="pre"
                    surface="muted"
                    radius="sm"
                    padding="sm"
                    style={{
                      margin: 0,
                      overflowX: "auto",
                      fontFamily: "var(--ds-font-mono)",
                      fontSize: "0.78rem",
                      lineHeight: 1.45,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word"
                    }}
                  >
                    {sourceSnippet}
                  </Box>
                </Card>
              </Stack>
              </Box>

              <Box as="aside" padding="lg" style={{ minWidth: 0 }}>
              <Stack gap="md">
                <Heading level={4}>Quick Setup</Heading>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Name</Text>
                  <Input placeholder="Daily executive digest" />
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Audience</Text>
                  <Select defaultValue="leadership">
                    <option value="leadership">Leadership</option>
                    <option value="operations">Operations</option>
                    <option value="all">All teams</option>
                  </Select>
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Message</Text>
                  <Textarea rows={4} placeholder="Share release, incidents, and key metrics." />
                </Stack>

                <Stack gap="xs">
                  <Switch checked={scheduleEnabled} onCheckedChange={setScheduleEnabled} label="Enable schedule" />
                  <Checkbox
                    checked={sendDigest}
                    onChange={function onChange(event) { setSendDigest(event.target.checked); }}
                    label="Send digest notification"
                  />
                </Stack>

                <Inline justify="end" gap="xs">
                  <Button tone="neutral">Cancel</Button>
                  <Button>Save</Button>
                </Inline>
              </Stack>
              </Box>
            </Grid>

            <Box as="footer" surface="surface" border="subtle" borderSide="top" padding="sm">
              <Inline justify="between" align="center" style={{ width: "100%" }}>
                <Text size="sm" tone="muted">v0.1.0 • Vibed Design System demo workspace</Text>
                <Text size="sm" tone="muted">Status: synced 2 minutes ago</Text>
              </Inline>
            </Box>
          </Box>

          <Drawer
            open={openDrawer}
            side="right"
            title="Quick actions"
            overlayMode="container"
            portalTarget={drawerTargetRef.current}
            onClose={function onClose() { setOpenDrawer(false); }}
          >
            <Stack gap="sm">
              <Text size="sm">Use this panel for contextual edits without leaving the page.</Text>
              <Box>
                <Text size="sm" weight="semibold">Priority</Text>
                <Select defaultValue="normal">
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </Select>
              </Box>
              <Box>
                <Text size="sm" weight="semibold">Owner</Text>
                <Input defaultValue="Olivia Jones" />
              </Box>
              <Inline justify="end" gap="xs">
                <Button tone="neutral" onClick={function onClick() { setOpenDrawer(false); }}>Cancel</Button>
                <Button onClick={function onClick() { setOpenDrawer(false); }}>Save draft</Button>
              </Inline>
            </Stack>
          </Drawer>

          <Modal
            open={openModal}
            title="Publish changes"
            onClose={function onClose() { setOpenModal(false); }}
          >
            <Stack gap="sm">
              <Text size="sm">Ready to publish this automation setup to your workspace?</Text>
              <Inline justify="end" gap="xs">
                <Button tone="neutral" onClick={function onClick() { setOpenModal(false); }}>Not now</Button>
                <Button onClick={function onClick() { setOpenModal(false); }}>Publish</Button>
              </Inline>
            </Stack>
          </Modal>
          </Box>
        </div>
      </DesignSystemProvider>
    );
  }
};
