import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "inline-flex", alignItems: "center", gap: "var(--ds-space-sm)" })
    .end();
});

export function Pagination(props: PaginationProps) {
  return (
    <Root className={props.className}>
      <Button tone="neutral" disabled={props.page <= 1} onClick={function onClick() { props.onPageChange(props.page - 1); }}>
        Previous
      </Button>
      <Text as="span" size="sm">{props.page} / {props.totalPages}</Text>
      <Button tone="neutral" disabled={props.page >= props.totalPages} onClick={function onClick() { props.onPageChange(props.page + 1); }}>
        Next
      </Button>
    </Root>
  );
}
