import type { HTMLAttributes, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { buildVariants } from "../../utils/buildVariants";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
  align?: "stretch" | "start" | "center" | "end";
}

function getStackStyle(props: StackProps){
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
}

export function Stack(props: StackProps) {
  const className: string = cx(css(getStackStyle(props)), props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
