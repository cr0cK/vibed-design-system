import type { HTMLAttributes, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { useDesignSystemContext } from "../../context/DesignSystemContext";
import { useUIStore } from "../../stores/uiStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

const sideClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      borderRight: "1px solid var(--ds-color-border)",
      padding: "var(--ds-space-lg)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .end()
);

const mainClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      padding: "var(--ds-space-xl)",
      display: "grid",
      gap: "var(--ds-space-lg)",
      alignContent: "start"
    })
    .end()
);

const topRowClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-md)"
    })
    .end()
);

function getShellStyle(density: "comfortable" | "compact"){
  return buildVariants<{ density: "comfortable" | "compact" }>({ density })
    .css({
      display: "grid",
      minHeight: "100vh"
    })
    .variant("density", density, {
      comfortable: { gridTemplateColumns: "260px 1fr" },
      compact: { gridTemplateColumns: "220px 1fr" }
    })
    .end();
}

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  navigation?: ReactNode;
  children?: ReactNode;
}

export function AppShell(props: AppShellProps) {
  const context = useDesignSystemContext();
  const sidePanelOpen = useUIStore((state) => state.sidePanelOpen);
  const toggleSidePanel = useUIStore((state) => state.toggleSidePanel);

  const shellClassName: string = cx(css(getShellStyle(context.density)), props.className);

  return (
    <div className={shellClassName} data-density={context.density}>
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
