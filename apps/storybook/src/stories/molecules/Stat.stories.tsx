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
