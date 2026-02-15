import type { HTMLAttributes, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { useDesignSystemContext } from "../../context/DesignSystemContext";
import { useUIStore } from "../../stores/uiStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";

const shellClassName: string = css({
  display: "grid",
  minHeight: "100vh",
  gridTemplateColumns: "260px 1fr"
});

const shellCompactClassName: string = css({
  gridTemplateColumns: "220px 1fr"
});

const sideClassName: string = css({
  borderRight: "1px solid var(--ds-color-border)",
  padding: "var(--ds-space-lg)",
  backgroundColor: "var(--ds-color-surface)"
});

const mainClassName: string = css({
  padding: "var(--ds-space-xl)",
  display: "grid",
  gap: "var(--ds-space-lg)",
  alignContent: "start"
});

const topRowClassName: string = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "var(--ds-space-md)"
});

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  navigation?: ReactNode;
  children?: ReactNode;
}

export function AppShell(props: AppShellProps) {
  const context = useDesignSystemContext();
  const sidePanelOpen = useUIStore((state) => state.sidePanelOpen);
  const toggleSidePanel = useUIStore((state) => state.toggleSidePanel);

  return (
    <div
      className={cx(shellClassName, context.density === "compact" ? shellCompactClassName : "", props.className)}
      data-density={context.density}
    >
      {sidePanelOpen ? <aside className={sideClassName}>{props.navigation}</aside> : null}
      <main className={mainClassName}>
        <div className={topRowClassName}>
          <Text as="h1" size="xl" weight="bold">
            {props.title}
          </Text>
          <Button tone="neutral" onClick={toggleSidePanel}>
            {sidePanelOpen ? "Hide nav" : "Show nav"}
          </Button>
        </div>
        {props.children}
      </main>
    </div>
  );
}
