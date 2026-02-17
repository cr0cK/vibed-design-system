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
  placement?: "start" | "end";
}

interface RootProps {
  placement?: "start" | "end";
}

const Root = styled.div<RootProps>(function style(props) {
  return buildVariants<RootProps>(props)
    .css({ position: "relative", display: "inline-block" })
    .variant("placement", props.placement ?? "start", {
      start: { width: "max-content", maxWidth: "100%" },
      end: { width: "max-content", maxWidth: "100%" }
    })
    .end();
});

interface SurfaceProps {
  placement?: "start" | "end";
}

const Surface = styled.div<SurfaceProps>(function style(props) {
  return buildVariants<SurfaceProps>(props)
    .css({
      position: "absolute",
      top: "calc(100% + 0.35rem)",
      minWidth: "13rem",
      zIndex: 30
    })
    .variant("placement", props.placement ?? "start", {
      start: { left: 0 },
      end: { right: 0 }
    })
    .end();
});

export function DropdownMenu(props: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const placement = props.placement ?? "start";
  const rootProps = {
    id: props.id,
    role: props.role,
    style: props.style,
    title: props.title,
    tabIndex: props.tabIndex,
    onKeyDown: props.onKeyDown,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    "aria-label": props["aria-label"],
    "aria-labelledby": props["aria-labelledby"],
    "aria-describedby": props["aria-describedby"]
  };

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
    <Root
      ref={rootRef}
      className={props.className}
      placement={placement}
      {...rootProps}
    >
      <Button tone="neutral" onClick={function onClick() { setOpen(!open); }}>{props.triggerLabel}</Button>
      {open ? (
        <Surface placement={placement}>
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
