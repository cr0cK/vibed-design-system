import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
  align?: "stretch" | "start" | "center" | "end";
}

const StackRoot = styled.div<StackProps>(function style(props) {
  return buildVariants<StackProps>(props)
    .css({
      display: "flex",
      flexDirection: "column"
    })
    .variant("gap", props.gap ?? "md", {
      xxs: { gap: "var(--ds-space-xxs)" },
      xs: { gap: "var(--ds-space-xs)" },
      sm: { gap: "var(--ds-space-sm)" },
      md: { gap: "var(--ds-space-md)" },
      lg: { gap: "var(--ds-space-lg)" }
    })
    .variant("align", props.align ?? "stretch", {
      stretch: { alignItems: "stretch" },
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" }
    })
    .end();
});

export function Stack(props: StackProps) {
  return (
    <StackRoot data-attr-name="Stack" {...props}>
      {props.children}
    </StackRoot>
  );
}
