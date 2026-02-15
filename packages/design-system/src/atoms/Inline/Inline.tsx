import type { HTMLAttributes, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { buildVariants } from "../../utils/buildVariants";

export interface InlineProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "end";
}

function getInlineStyle(props: InlineProps){
  return buildVariants<InlineProps>(props)
    .css({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    })
    .variant("gap", props.gap ?? "sm", {
      xxs: { gap: "var(--ds-space-xxs)" },
      xs: { gap: "var(--ds-space-xs)" },
      sm: { gap: "var(--ds-space-sm)" },
      md: { gap: "var(--ds-space-md)" },
      lg: { gap: "var(--ds-space-lg)" }
    })
    .variant("align", props.align ?? "center", {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" }
    })
    .variant("justify", props.justify ?? "start", {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
      end: { justifyContent: "flex-end" }
    })
    .end();
}

export function Inline(props: InlineProps) {
  const className: string = cx(css(getInlineStyle(props)), props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
