import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

const SkeletonRoot = styled.div<SkeletonProps>(function style(props) {
  return buildVariants<SkeletonProps>(props)
    .css({
      width: props.width ?? "100%",
      height: props.height ?? "1rem",
      borderRadius: "var(--ds-radius-sm)",
      background: "linear-gradient(90deg, var(--ds-color-surface-muted), var(--ds-color-surface), var(--ds-color-surface-muted))",
      backgroundSize: "200% 100%",
      animation: "ds-skeleton 1.2s ease infinite",
      "@keyframes ds-skeleton": {
        from: { backgroundPosition: "200% 0" },
        to: { backgroundPosition: "-200% 0" }
      }
    })
    .end();
});

export function Skeleton(props: SkeletonProps) {
  return <SkeletonRoot data-attr-name="Skeleton" {...props} aria-hidden="true" />;
}
