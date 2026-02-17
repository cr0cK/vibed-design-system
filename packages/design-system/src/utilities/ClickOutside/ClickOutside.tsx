import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ClickOutsideProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClickOutside?: () => void;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ width: "100%" })
    .end();
});

export function ClickOutside(props: ClickOutsideProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(function bindOutside() {
    function onMouseDown(event: MouseEvent) {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        if (props.onClickOutside) {
          props.onClickOutside();
        }
      }
    }

    document.addEventListener("mousedown", onMouseDown);
    return function cleanup() {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [props.onClickOutside]);

  return <Root ref={rootRef} className={props.className}>{props.children}</Root>;
}
