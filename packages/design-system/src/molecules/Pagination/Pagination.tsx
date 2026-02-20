import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface PaginationLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<PaginationLayoutProps>(function style(props) {
  return buildVariants<PaginationLayoutProps>(props)
    .css({ display: "inline-flex", alignItems: "center", gap: "var(--ds-space-sm)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xs)" },
      md: { gap: "var(--ds-space-sm)" },
      lg: { gap: "var(--ds-space-md)" }
    })
    .end();
});

/**
 * Molecule component that renders the Pagination primitive.
 */
export function Pagination(props: PaginationProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";
  const textSize = controlSize === "sm" ? "sm" : controlSize === "lg" ? "lg" : "md";

  return (
    <Root data-attr-name="Pagination" className={props.className} controlSize={controlSize}>
      <Button controlSize={controlSize} tone="neutral" disabled={props.page <= 1} onClick={function onClick() { props.onPageChange(props.page - 1); }}>
        Previous
      </Button>
      <Text as="span" size={textSize}>{props.page} / {props.totalPages}</Text>
      <Button controlSize={controlSize} tone="neutral" disabled={props.page >= props.totalPages} onClick={function onClick() { props.onPageChange(props.page + 1); }}>
        Next
      </Button>
    </Root>
  );
}
