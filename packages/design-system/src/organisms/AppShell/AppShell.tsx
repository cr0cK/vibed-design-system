import type { HTMLAttributes, ReactNode } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { useDesignSystemContext } from "../../context/DesignSystemContext";
import { useUIStore } from "../../stores/uiStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { toClassName } from "../../utils/styleVariants";

const sideStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    borderRight: "1px solid var(--ds-color-border)",
    padding: "var(--ds-space-lg)",
    backgroundColor: "var(--ds-color-surface)"
  })
  .end();

const mainStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    padding: "var(--ds-space-xl)",
    display: "grid",
    gap: "var(--ds-space-lg)",
    alignContent: "start"
  })
  .end();

const topRowStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--ds-space-md)"
  })
  .end();

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  navigation?: ReactNode;
  children?: ReactNode;
}

export function AppShell(props: AppShellProps) {
  const context = useDesignSystemContext();
  const sidePanelOpen = useUIStore((state) => state.sidePanelOpen);
  const toggleSidePanel = useUIStore((state) => state.toggleSidePanel);

  const shellStyle = newBuildVariants<{ density: "comfortable" | "compact" }, Record<string, unknown>>({
    density: context.density
  })
    .css({
      display: "grid",
      minHeight: "100vh"
    })
    .variant("density", context.density, {
      comfortable: { gridTemplateColumns: "260px 1fr" },
      compact: { gridTemplateColumns: "220px 1fr" }
    })
    .end();

  return (
    <div
      className={toClassName(shellStyle, props.className)}
      data-density={context.density}
    >
      {sidePanelOpen ? <aside className={toClassName(sideStyle)}>{props.navigation}</aside> : null}
      <main className={toClassName(mainStyle)}>
        <div className={toClassName(topRowStyle)}>
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
