import { IconButton, Inline, Stack } from "@vibed/design-system";

const meta = { title: "Atoms/IconButton", component: IconButton, tags: ["autodocs"] };
export default meta;

function PlusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4.25V15.75M4.25 10H15.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5.25 5.25L14.75 14.75M14.75 5.25L5.25 14.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Inline gap="sm">
          <IconButton controlSize="sm" label="Add" icon={<PlusIcon />} tone="primary" />
          <IconButton controlSize="sm" label="Delete" icon={<CloseIcon />} tone="danger" />
          <IconButton controlSize="sm" label="More" tone="neutral">
            <span aria-hidden="true">•••</span>
          </IconButton>
        </Inline>
        <Inline gap="sm">
          <IconButton controlSize="md" label="Add" icon={<PlusIcon />} tone="primary" />
          <IconButton controlSize="md" label="Delete" icon={<CloseIcon />} tone="danger" />
          <IconButton controlSize="md" label="More" tone="neutral">
            <span aria-hidden="true">•••</span>
          </IconButton>
        </Inline>
        <Inline gap="sm">
          <IconButton controlSize="lg" label="Add" icon={<PlusIcon />} tone="primary" />
          <IconButton controlSize="lg" label="Delete" icon={<CloseIcon />} tone="danger" />
          <IconButton controlSize="lg" label="More" tone="neutral">
            <span aria-hidden="true">•••</span>
          </IconButton>
        </Inline>
      </Stack>
    );
  }
};

export const Playground = {
  args: {
    tone: "primary",
    controlSize: "md",
    disabled: false,
    label: "Add"
  },
  argTypes: {
    tone: { control: "select", options: ["primary", "neutral", "danger"] },
    controlSize: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    label: { control: "text" }
  },
  render: function Render(args: any) {
    return <IconButton tone={args.tone} controlSize={args.controlSize} disabled={args.disabled} label={args.label} icon={<PlusIcon />} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

