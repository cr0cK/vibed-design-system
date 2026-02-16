import { Badge, Box, Button, ButtonGroup, Checkbox, Container, Divider, FormControl, Grid, Heading, Input, Link, Radio, Select, Spacer, Stack, Switch, Text, Textarea } from "@vibed/design-system";
import { useState } from "react";

const meta = {
  title: "Phase 1/Foundations + Controls",
  component: Stack,
  tags: ["autodocs"]
};

export default meta;

function ControlsDemo() {
  const [switchOn, setSwitchOn] = useState(false);
  const [radio, setRadio] = useState("a");

  return (
    <Container width="lg">
      <Stack gap="md">
        <Heading level={2}>Foundation + Controls</Heading>
        <Text tone="muted">Core atoms for layout, text, form controls, and simple status chips.</Text>

        <Grid columns={2} gap="md">
          <Box surface="elevated" padding="md" radius="md">
            <Stack gap="sm">
              <Heading level={4}>Layout</Heading>
              <Divider />
              <ButtonGroup>
                <Button tone="primary">Primary</Button>
                <Button tone="neutral">Neutral</Button>
              </ButtonGroup>
              <Spacer size="sm" />
              <Link href="#">Text Link</Link>
              <Badge tone="success">Ready</Badge>
            </Stack>
          </Box>

          <Box surface="elevated" padding="md" radius="md">
            <Stack gap="sm">
              <Heading level={4}>Form Inputs</Heading>
              <FormControl label="Project" htmlFor="p-name" hint="Name visible to the team">
                <Input id="p-name" placeholder="Vibed DS" />
              </FormControl>

              <FormControl label="Description" htmlFor="p-description">
                <Textarea id="p-description" rows={3} placeholder="Short summary" />
              </FormControl>

              <FormControl label="Type" htmlFor="p-type">
                <Select id="p-type" defaultValue="library">
                  <option value="library">Library</option>
                  <option value="application">Application</option>
                </Select>
              </FormControl>

              <Checkbox label="Enable CI" defaultChecked />
              <Radio label="Public repo" checked={radio === "a"} onChange={function onChange() { setRadio("a"); }} />
              <Radio label="Private repo" checked={radio === "b"} onChange={function onChange() { setRadio("b"); }} />
              <Switch checked={switchOn} onCheckedChange={setSwitchOn} label="Release mode" />
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </Container>
  );
}

export const Showcase = {
  render: function Render() {
    return <ControlsDemo />;
  }
};
