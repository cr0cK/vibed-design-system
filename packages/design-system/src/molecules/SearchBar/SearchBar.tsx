import type { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  controlSize?: "sm" | "md" | "lg";
}

interface IconProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", width: "100%", minWidth: 0 })
    .end();
});

const Icon = styled.span<IconProps>(function style(props) {
  return buildVariants<IconProps>(props)
    .css({
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ds-color-text-muted)",
      pointerEvents: "none",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none' stroke='%23556884' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='6.5' cy='6.5' r='4'/%3E%3Cpath d='M9.7 9.7L13 13'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { left: "0.6rem", width: "0.9rem", height: "0.9rem" },
      md: { left: "0.7rem", width: "1rem", height: "1rem" },
      lg: { left: "0.8rem", width: "1.05rem", height: "1.05rem" }
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
      sm: { padding: "0.4rem 0.6rem 0.4rem 2rem", minHeight: "2rem", fontSize: "0.86rem" },
      md: { padding: "0.55rem 0.7rem 0.55rem 2.1rem", minHeight: "2.25rem", fontSize: "0.95rem" },
      lg: { padding: "0.68rem 0.82rem 0.68rem 2.2rem", minHeight: "2.5rem", fontSize: "1rem" }
    })
    .end();
});

export function SearchBar(props: SearchBarProps) {
  return (
    <Root data-attr-name="SearchBar" className={props.className}>
      <Icon aria-hidden="true" controlSize={props.controlSize} />
      <Input {...props} type="search" />
    </Root>
  );
}
