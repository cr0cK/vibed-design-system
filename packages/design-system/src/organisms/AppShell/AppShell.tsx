import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { useDesignSystemContext } from "../../context/DesignSystemContext";
import { useUIStore } from "../../stores/uiStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

interface ShellProps extends HTMLAttributes<HTMLDivElement> {
  density: "comfortable" | "compact";
}

const Shell = styled.div<ShellProps>(function style(props) {
  return buildVariants<ShellProps>(props)
    .css({
      display: "grid",
      minHeight: "100vh",
      "@media (max-width: 860px)": {
        gridTemplateColumns: "minmax(0, 1fr)"
      }
    })
    .variant("density", props.density, {
      comfortable: { gridTemplateColumns: "260px 1fr" },
      compact: { gridTemplateColumns: "220px 1fr" }
    })
    .end();
});

const Side = styled.aside(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      borderRight: "1px solid var(--ds-color-border)",
      padding: "var(--ds-space-lg)",
      backgroundColor: "var(--ds-color-surface)",
      "@media (max-width: 860px)": {
        borderRight: "none",
        borderBottom: "1px solid var(--ds-color-border)"
      }
    })
    .end();
});

const Main = styled.main(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      padding: "var(--ds-space-xl)",
      display: "grid",
      gap: "var(--ds-space-lg)",
      alignContent: "start",
      minWidth: 0,
      "@media (max-width: 860px)": {
        padding: "var(--ds-space-lg)"
      }
    })
    .end();
});

const TopRow = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-md)",
      flexWrap: "wrap"
    })
    .end();
});

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  navigation?: ReactNode;
  children?: ReactNode;
}

/**
 * Organism component that renders the AppShell primitive.
 */
export function AppShell(props: AppShellProps) {
  const context = useDesignSystemContext();
  const sidePanelOpen = useUIStore((state) => state.sidePanelOpen);
  const toggleSidePanel = useUIStore((state) => state.toggleSidePanel);

  return (
    <Shell data-attr-name="AppShell" className={props.className} density={context.density} data-density={context.density}>
      {sidePanelOpen ? <Side>{props.navigation}</Side> : null}
      <Main>
        <TopRow>
          <Text as="h1" size="xl" weight="bold">
            {props.title}
          </Text>
          <Button tone="neutral" onClick={toggleSidePanel}>
            {sidePanelOpen ? "Hide nav" : "Show nav"}
          </Button>
        </TopRow>
        {props.children}
      </Main>
    </Shell>
  );
}
