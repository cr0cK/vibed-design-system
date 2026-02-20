import { Table, Tag } from "@vibed/design-system";

const meta = { title: "Molecules/Table", component: Table, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Table
        columns={[
          { key: "name", header: "Automation" },
          { key: "owner", header: "Owner" },
          { key: "status", header: "Status", align: "right" }
        ]}
        rows={[
          { id: "a1", cells: { name: "Morning Pulse", owner: "Olivia", status: <Tag tone="success">Active</Tag> } },
          { id: "a2", cells: { name: "Ops Snapshot", owner: "Liam", status: <Tag tone="neutral">Paused</Tag> } },
          { id: "a3", cells: { name: "Weekly Brief", owner: "Emma", status: <Tag tone="danger">Issue</Tag> } }
        ]}
      />
    );
  }
};

export const Playground = {
  render: function Render() {
    return (
      <Table
        columns={[
          { key: "name", header: "Automation" },
          { key: "owner", header: "Owner" },
          { key: "status", header: "Status", align: "right" }
        ]}
        rows={[
          { id: "a1", cells: { name: "Morning Pulse", owner: "Olivia", status: <Tag tone="success">Active</Tag> } },
          { id: "a2", cells: { name: "Ops Snapshot", owner: "Liam", status: <Tag tone="neutral">Paused</Tag> } },
          { id: "a3", cells: { name: "Weekly Brief", owner: "Emma", status: <Tag tone="danger">Issue</Tag> } }
        ]}
      />
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

