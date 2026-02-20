import type { HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  tone?: "default" | "muted";
}

const HeadingRoot = styled.h2<HeadingProps>(function style(props) {
  return buildVariants<HeadingProps>(props)
    .css({
      margin: 0,
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-display)",
      letterSpacing: "-0.02em"
    })
    .variant("level", String(props.level ?? 2), {
      "1": { fontSize: "2.2rem", fontWeight: 700 },
      "2": { fontSize: "1.7rem", fontWeight: 700 },
      "3": { fontSize: "1.35rem", fontWeight: 650 },
      "4": { fontSize: "1.15rem", fontWeight: 650 },
      "5": { fontSize: "1rem", fontWeight: 600 },
      "6": { fontSize: "0.9rem", fontWeight: 600 }
    })
    .variant("tone", props.tone ?? "default", {
      default: { color: "var(--ds-color-text)" },
      muted: { color: "var(--ds-color-text-muted)" }
    })
    .end();
});

export function Heading(props: HeadingProps) {
  return createElement(HeadingRoot, { ...props, as: `h${props.level ?? 2}`, "data-attr-name": "Heading" } as any, props.children);
}
