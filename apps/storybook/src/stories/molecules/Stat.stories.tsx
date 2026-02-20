import { Grid, Stat } from "@vibed/design-system";

const meta = { title: "Molecules/Stat", component: Stat, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Grid columns={3} gap="sm">
        <Stat label="Open rate" value="42.8%" trend="+2.4% vs last week" tone="success" />
        <Stat label="Automation errors" value="3" trend="-1 vs yesterday" tone="success" />
        <Stat label="Escalations" value="12" trend="+4 today" tone="danger" />
      </Grid>
    );
  }
};

export const Playground = {
  args: { label: "Open rate", value: "42.8%", trend: "+2.4% vs last week", tone: "success" },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    trend: { control: "text" },
    tone: { control: "select", options: ["neutral", "success", "danger"] }
  },
  render: function Render(args: any) {
    return <Stat label={args.label} value={args.value} trend={args.trend} tone={args.tone} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

