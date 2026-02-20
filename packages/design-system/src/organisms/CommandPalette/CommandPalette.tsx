import type { HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Portal } from "../../utilities/Portal/Portal";
import { ClickOutside } from "../../utilities/ClickOutside/ClickOutside";
import { FocusTrap } from "../../utilities/FocusTrap/FocusTrap";

export interface CommandItem {
  id: string;
  label: string;
  keywords?: string[];
  onSelect?: () => void;
}

export interface CommandPaletteProps extends HTMLAttributes<HTMLDivElement> {
  commands: CommandItem[];
  triggerLabel?: string;
  dialogLabel?: string;
  closeOnEscape?: boolean;
  portalTarget?: HTMLElement | null;
}

interface BackdropProps {
  entered: boolean;
}

const Backdrop = styled.div<BackdropProps>(function style(props) {
  return buildVariants<BackdropProps>(props)
    .css({
      position: "fixed",
      inset: 0,
      backgroundColor: props.entered ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)",
      display: "grid",
      placeItems: "start center",
      paddingTop: "12vh",
      zIndex: 70,
      transition: "background-color .18s ease"
    })
    .end();
});

interface PanelProps {
  entered: boolean;
}

const Panel = styled.div<PanelProps>(function style(props) {
  return buildVariants<PanelProps>(props)
    .css({
      width: "min(34rem, 92vw)",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-lg)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-md)",
      overflow: "hidden",
      opacity: props.entered ? 1 : 0,
      transform: props.entered ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.985)",
      transition: "opacity .2s ease, transform .2s cubic-bezier(.2,.8,.2,1)",
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none",
        opacity: 1,
        transform: "none"
      }
    })
    .end();
});

const Input = styled.input(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      width: "100%",
      border: "none",
      outline: "none",
      borderBottom: "1px solid var(--ds-color-border)",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.95rem",
      padding: "0.72rem 0.8rem"
    })
    .end();
});

interface ItemProps {
  highlighted?: boolean;
}

const Item = styled.button<ItemProps>(function style(props) {
  return buildVariants<ItemProps>(props)
    .css({
      width: "100%",
      textAlign: "left",
      border: "none",
      backgroundColor: props.highlighted ? "var(--ds-color-surface-muted)" : "transparent",
      color: "var(--ds-color-text)",
      padding: "0.65rem 0.8rem",
      cursor: "pointer"
    })
    .end();
});

const Empty = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ padding: "0.75rem 0.8rem", color: "var(--ds-color-text-muted)", fontSize: "0.88rem" })
    .end();
});

export function CommandPalette(props: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(function keyboardShortcut() {
    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape" && (props.closeOnEscape ?? true)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [props.closeOnEscape]);

  const filtered = props.commands.filter(function filter(command) {
    const normalized = query.toLowerCase().trim();
    if (!normalized) {
      return true;
    }

    if (command.label.toLowerCase().includes(normalized)) {
      return true;
    }

    if (command.keywords) {
      return command.keywords.some(function some(keyword) {
        return keyword.toLowerCase().includes(normalized);
      });
    }

    return false;
  });

  function selectCommand(index: number) {
    const command = filtered[index];
    if (!command) {
      return;
    }

    if (command.onSelect) {
      command.onSelect();
    }

    setOpen(false);
    setQuery("");
    setHighlightedIndex(0);
  }

  useEffect(function animateOpen() {
    if (!open) {
      setEntered(false);
      return;
    }

    const rafId = window.requestAnimationFrame(function onFrame() {
      setEntered(true);
    });

    return function cleanup() {
      window.cancelAnimationFrame(rafId);
    };
  }, [open]);

  useEffect(function onEscapeWhenOpen() {
    if (!open || props.closeOnEscape === false) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && rootRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, props.closeOnEscape]);

  return (
    <>
      <Button tone="neutral" onClick={function onClick() { setOpen(true); }}>
        {props.triggerLabel ?? "Open command palette"}
      </Button>
      {open ? (
        <Portal target={props.portalTarget}>
          <Backdrop entered={entered}>
            <ClickOutside onClickOutside={function onClickOutside() { setOpen(false); }}>
              <FocusTrap active initialFocusRef={inputRef}>
                <Panel
                  data-attr-name="CommandPalette"
                  ref={rootRef}
                  entered={entered}
                  role="dialog"
                  aria-modal="true"
                  aria-label={props.dialogLabel ?? "Command palette"}
                >
                  <Input
                    ref={inputRef}
                    autoFocus
                    value={query}
                    placeholder="Type a command..."
                    onChange={function onChange(event) {
                      setQuery(event.target.value);
                      setHighlightedIndex(0);
                    }}
                    onKeyDown={function onKeyDown(event) {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        setHighlightedIndex(Math.min(filtered.length - 1, highlightedIndex + 1));
                        return;
                      }
                      if (event.key === "ArrowUp") {
                        event.preventDefault();
                        setHighlightedIndex(Math.max(0, highlightedIndex - 1));
                        return;
                      }
                      if (event.key === "Enter") {
                        event.preventDefault();
                        selectCommand(highlightedIndex);
                      }
                    }}
                  />
                  {filtered.length === 0 ? (
                    <Empty>No commands found</Empty>
                  ) : (
                    <div>
                      {filtered.map(function mapCommand(command, index) {
                        return (
                          <Item
                            key={command.id}
                            highlighted={index === highlightedIndex}
                            onMouseEnter={function onMouseEnter() {
                              setHighlightedIndex(index);
                            }}
                            onClick={function onClick() {
                              selectCommand(index);
                            }}
                          >
                            {command.label}
                          </Item>
                        );
                      })}
                    </div>
                  )}
                </Panel>
              </FocusTrap>
            </ClickOutside>
          </Backdrop>
        </Portal>
      ) : null}
    </>
  );
}
