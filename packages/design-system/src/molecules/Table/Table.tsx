import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface TableColumn {
  key: string;
  header: ReactNode;
  align?: "left" | "center" | "right";
}

export interface TableRow {
  id: string;
  cells: Record<string, ReactNode>;
}

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  columns: TableColumn[];
  rows: TableRow[];
  controlSize?: "sm" | "md" | "lg";
}

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      width: "100%",
      overflowX: "auto",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .end();
});

const StyledTable = styled.table<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--ds-font-body)",
      color: "var(--ds-color-text)",
      minWidth: "24rem"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { fontSize: "0.84rem" },
      md: { fontSize: "0.92rem" },
      lg: { fontSize: "1rem" }
    })
    .end();
});

interface CellProps {
  align?: "left" | "center" | "right";
}

const HeadCell = styled.th<CellProps>(function style(props) {
  return buildVariants<CellProps>(props)
    .css({
      textAlign: "left",
      fontWeight: 600,
      backgroundColor: "var(--ds-color-surface-muted)",
      borderBottom: "1px solid var(--ds-color-border)",
      padding: "0.65rem 0.8rem"
    })
    .variant("align", props.align ?? "left", {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" }
    })
    .end();
});

const BodyCell = styled.td<CellProps>(function style(props) {
  return buildVariants<CellProps>(props)
    .css({
      borderBottom: "1px solid var(--ds-color-border)",
      padding: "0.62rem 0.8rem"
    })
    .variant("align", props.align ?? "left", {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" }
    })
    .end();
});

export function Table(props: TableProps) {
  return (
    <Root className={props.className}>
      <StyledTable controlSize={props.controlSize}>
        <thead>
          <tr>
            {props.columns.map(function mapColumn(column) {
              return (
                <HeadCell key={column.key} align={column.align}>
                  {column.header}
                </HeadCell>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map(function mapRow(row) {
            return (
              <tr key={row.id}>
                {props.columns.map(function mapColumn(column) {
                  return (
                    <BodyCell key={column.key} align={column.align}>
                      {row.cells[column.key]}
                    </BodyCell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Root>
  );
}
