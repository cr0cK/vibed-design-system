import type { HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Menu } from "../../molecules/Menu/Menu";
import type { MenuItem } from "../../molecules/Menu/Menu";

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  triggerLabel: string;
  items: MenuItem[];
  selectedId?: string;
  onItemSelect?: (id: string) => void;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", display: "inline-block" })
    .end();
});

const Surface = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      top: "calc(100% + 0.35rem)",
      right: 0,
      minWidth: "13rem",
      zIndex: 30
    })
    .end();
});

export function DropdownMenu(props: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(function closeOutside() {
    function onMouseDown(event: MouseEvent) {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return function cleanup() {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <Root className={props.className} ref={rootRef}>
      <Button tone="neutral" onClick={function onClick() { setOpen(!open); }}>{props.triggerLabel}</Button>
      {open ? (
        <Surface>
          <Menu
            items={props.items}
            selectedId={props.selectedId}
            onItemSelect={function onItemSelect(id) {
              if (props.onItemSelect) {
                props.onItemSelect(id);
              }
              setOpen(false);
            }}
          />
        </Surface>
      ) : null}
    </Root>
  );
}
