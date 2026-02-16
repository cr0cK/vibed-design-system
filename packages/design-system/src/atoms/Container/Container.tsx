import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  width?: "sm" | "md" | "lg" | "xl";
}

const ContainerRoot = styled.div<ContainerProps>(function style(props) {
  return buildVariants<ContainerProps>(props)
    .css({
      width: "100%",
      marginInline: "auto",
      paddingInline: "var(--ds-space-md)"
    })
    .variant("width", props.width ?? "lg", {
      sm: { maxWidth: "40rem" },
      md: { maxWidth: "56rem" },
      lg: { maxWidth: "72rem" },
      xl: { maxWidth: "88rem" }
    })
    .end();
});

export function Container(props: ContainerProps) {
  return <ContainerRoot {...props}>{props.children}</ContainerRoot>;
}
