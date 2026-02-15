import type { HTMLAttributes, ReactNode } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { omitProps } from "../../utils/omitProps";
import { toClassName } from "../../utils/styleVariants";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gap?: "xxs" | "xs" | "sm" | "md" | "lg";
  align?: "stretch" | "start" | "center" | "end";
}

export function Stack(props: StackProps) {
  const nativeProps = omitProps(props as Record<string, unknown>, ["gap", "align"] as const) as HTMLAttributes<HTMLDivElement>;

  const style = newBuildVariants<StackProps, Record<string, unknown>>(props)
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

  return (
    <div
      {...nativeProps}
      className={toClassName(style, props.className)}
    >
      {props.children}
    </div>
  );
}
