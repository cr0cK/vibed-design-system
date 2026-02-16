import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  shape?: "circle" | "rounded" | "square";
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface AvatarLayoutProps {
  shape?: "circle" | "rounded" | "square";
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<AvatarLayoutProps>(function style(props) {
  return buildVariants<AvatarLayoutProps>(props)
    .css({
      display: "inline-grid",
      placeItems: "center",
      backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 18%, var(--ds-color-surface-muted))",
      color: "var(--ds-color-text)",
      border: "1px solid var(--ds-color-border)",
      overflow: "hidden",
      fontFamily: "var(--ds-font-display)",
      fontWeight: 600,
      userSelect: "none"
    })
    .variant("shape", props.shape ?? "circle", {
      circle: { borderRadius: "var(--ds-radius-full)" },
      rounded: { borderRadius: "var(--ds-radius-md)" },
      square: { borderRadius: "var(--ds-radius-sm)" }
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { width: "1.9rem", height: "1.9rem", fontSize: "0.75rem" },
      md: { width: "2.4rem", height: "2.4rem", fontSize: "0.88rem" },
      lg: { width: "3rem", height: "3rem", fontSize: "1rem" }
    })
    .end();
});

const Image = styled.img(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    })
    .end();
});

function getInitials(name?: string): string {
  if (!name) {
    return "?";
  }
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "?";
  }
  if (parts.length === 1) {
    const firstPart = parts[0] ?? "";
    return firstPart.slice(0, 1).toUpperCase();
  }
  const firstPart = parts[0] ?? "";
  const secondPart = parts[1] ?? "";
  return `${firstPart.slice(0, 1)}${secondPart.slice(0, 1)}`.toUpperCase();
}

export function Avatar(props: AvatarProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";

  return (
    <Root
      className={props.className}
      controlSize={controlSize}
      shape={props.shape}
      role="img"
      aria-label={props.alt ?? props.name ?? "User avatar"}
    >
      {props.src ? <Image src={props.src} alt={props.alt ?? props.name ?? "User avatar"} /> : getInitials(props.name)}
    </Root>
  );
}
