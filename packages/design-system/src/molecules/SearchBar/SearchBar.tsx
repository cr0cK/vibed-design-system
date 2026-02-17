import type { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", width: "100%", minWidth: 0 })
    .end();
});

const Icon = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      left: "0.65rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ds-color-text-muted)",
      pointerEvents: "none"
    })
    .end();
});

const Input = styled.input<SearchBarProps>(function style(props) {
  return buildVariants<SearchBarProps>(props)
    .css({
      width: "100%",
      minWidth: 0,
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      outline: "none"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "0.4rem 0.6rem 0.4rem 1.85rem", minHeight: "2rem", fontSize: "0.86rem" },
      md: { padding: "0.55rem 0.7rem 0.55rem 1.95rem", minHeight: "2.25rem", fontSize: "0.95rem" },
      lg: { padding: "0.68rem 0.82rem 0.68rem 2.05rem", minHeight: "2.5rem", fontSize: "1rem" }
    })
    .end();
});

export function SearchBar(props: SearchBarProps) {
  return (
    <Root className={props.className}>
      <Icon aria-hidden="true">⌕</Icon>
      <Input {...props} type="search" />
    </Root>
  );
}
