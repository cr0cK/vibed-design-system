import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ClickOutsideProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClickOutside?: () => void;
  enabled?: boolean;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ minWidth: 0 })
    .end();
});

export function ClickOutside(props: ClickOutsideProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(function bindOutside() {
    if (props.enabled === false) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        if (props.onClickOutside) {
          props.onClickOutside();
        }
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return function cleanup() {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [props.enabled, props.onClickOutside]);

  return (
    <Root
      data-attr-name="ClickOutside"
      ref={rootRef}
      className={props.className}
      id={props.id}
      role={props.role}
      style={props.style}
      tabIndex={props.tabIndex}
      onKeyDown={props.onKeyDown}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
      aria-describedby={props["aria-describedby"]}
    >
      {props.children}
    </Root>
  );
}
