import type { HTMLAttributes, ReactNode } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { omitProps } from "../../utils/omitProps";
import { toClassName } from "../../utils/styleVariants";

export interface InlineProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "end";
}

export function Inline(props: InlineProps) {
  const nativeProps = omitProps(props as Record<string, unknown>, ["gap", "align", "justify"] as const) as HTMLAttributes<HTMLDivElement>;

  const style = newBuildVariants<InlineProps, Record<string, unknown>>(props)
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

  return (
    <div
      {...nativeProps}
      className={toClassName(style, props.className)}
    >
      {props.children}
    </div>
  );
}
