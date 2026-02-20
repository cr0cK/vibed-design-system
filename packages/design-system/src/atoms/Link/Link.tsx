import type { AnchorHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  tone?: "default" | "muted";
}

const LinkRoot = styled.a<LinkProps>(function style(props) {
  return buildVariants<LinkProps>(props)
    .css({
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      fontFamily: "var(--ds-font-body)"
    })
    .variant("tone", props.tone ?? "default", {
      default: { color: "var(--ds-color-primary)" },
      muted: { color: "var(--ds-color-text-muted)" }
    })
    .end();
});

export function Link(props: LinkProps) {
  return <LinkRoot data-attr-name="Link" {...props}>{props.children}</LinkRoot>;
}
