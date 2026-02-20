import { Button, PageHeader } from "@vibed/design-system";

const meta = { title: "Organisms/PageHeader", component: PageHeader, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <PageHeader
        heading="Automations"
        subtitle="Create and manage workflow schedules"
        actions={<Button tone="primary">New automation</Button>}
      />
    );
  }
};

export const Playground = {
  args: { heading: "Automations", subtitle: "Create and manage workflow schedules" },
  argTypes: { heading: { control: "text" }, subtitle: { control: "text" } },
  render: function Render(args: any) {
    return <PageHeader heading={args.heading} subtitle={args.subtitle} actions={<Button tone="primary">New automation</Button>} />;
  }
};

