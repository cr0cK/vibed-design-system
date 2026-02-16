import type { ChangeEvent, KeyboardEvent, ReactNode, SelectHTMLAttributes } from "react";
import { Children, isValidElement, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
}

interface SelectOptionItem {
  value: string;
  label: string;
  disabled: boolean;
}

interface SelectTriggerProps {
  disabled?: boolean;
  open?: boolean;
}

const SelectRoot = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "relative",
      width: "100%",
      minWidth: 0
    })
    .end();
});

const SelectTrigger = styled.button<SelectTriggerProps>(function style(props) {
  return buildVariants<SelectTriggerProps>(props)
    .css({
      width: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      minHeight: "2rem",
      borderRadius: "0.375rem",
      border: "1px solid color-mix(in oklab, var(--ds-color-border) 92%, #cfd6df)",
      padding: "0.3rem 2.1rem 0.3rem 0.72rem",
      fontSize: "0.875rem",
      lineHeight: 1.57,
      fontFamily: "var(--ds-font-body)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      cursor: props.disabled ? "not-allowed" : "pointer",
      textAlign: "left",
      transition: "border-color .16s ease, box-shadow .16s ease, background-color .16s ease",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      position: "relative",
      "&::after": {
        content: "\"\"",
        position: "absolute",
        width: "0.82rem",
        height: "0.82rem",
        right: "0.72rem",
        top: "50%",
        transform: props.open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
        transition: "transform .14s ease",
        pointerEvents: "none",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none' stroke='%238e98a7' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0.82rem 0.82rem",
        backgroundPosition: "center"
      },
      "&:hover": {
        borderColor: props.disabled ? "color-mix(in oklab, var(--ds-color-border) 88%, var(--ds-color-surface-muted))" : "color-mix(in oklab, var(--ds-color-primary) 46%, var(--ds-color-border))"
      },
      "&:focus-visible": {
        outline: "none",
        borderColor: "var(--ds-color-primary)",
        boxShadow: props.disabled ? "none" : "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 18%, transparent)"
      },
      "&[data-open='true']": {
        borderColor: "var(--ds-color-primary)",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 14%, transparent)"
      },
      "&[data-disabled='true']": {
        backgroundColor: "var(--ds-color-surface-muted)",
        color: "var(--ds-color-text-muted)",
        borderColor: "color-mix(in oklab, var(--ds-color-border) 88%, var(--ds-color-surface-muted))"
      }
    })
    .end();
});

const OptionsLayer = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      zIndex: 20,
      insetInline: 0,
      top: "calc(100% + 0.25rem)",
      borderRadius: "0.5rem",
      border: "1px solid color-mix(in oklab, var(--ds-color-border) 88%, #d6dde7)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "0 8px 24px rgba(17, 24, 39, 0.12)",
      overflow: "hidden"
    })
    .end();
});

const OptionsList = styled.ul(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      listStyle: "none",
      margin: 0,
      padding: "0.25rem",
      maxHeight: "15rem",
      overflowY: "auto"
    })
    .end();
});

interface OptionButtonProps {
  selected?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
}

const OptionButton = styled.button<OptionButtonProps>(function style(props) {
  return buildVariants<OptionButtonProps>(props)
    .css({
      width: "100%",
      border: "none",
      borderRadius: "0.35rem",
      padding: "0.4rem 0.6rem",
      margin: 0,
      textAlign: "left",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.875rem",
      lineHeight: 1.45,
      cursor: props.disabled ? "not-allowed" : "pointer",
      backgroundColor: props.selected ? "color-mix(in oklab, var(--ds-color-primary) 16%, var(--ds-color-surface))" : props.highlighted ? "color-mix(in oklab, var(--ds-color-primary) 8%, var(--ds-color-surface))" : "transparent",
      color: props.disabled ? "var(--ds-color-text-muted)" : "var(--ds-color-text)",
      transition: "background-color .12s ease, color .12s ease"
    })
    .end();
});

function getOptions(children: ReactNode): SelectOptionItem[] {
  const options: SelectOptionItem[] = [];
  const nodes = Children.toArray(children);

  for (const node of nodes) {
    if (!isValidElement<{ value?: string | number; children?: ReactNode; disabled?: boolean }>(node)) {
      continue;
    }
    if (node.type !== "option") {
      continue;
    }

    const rawValue = node.props.value;
    const value = rawValue !== undefined ? String(rawValue) : "";
    const label = node.props.children !== undefined ? String(node.props.children) : value;
    const disabled = Boolean(node.props.disabled);

    options.push({ value, label, disabled });
  }

  return options;
}

export function Select(props: SelectProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const options = useMemo(function memoOptions() {
    return getOptions(props.children);
  }, [props.children]);
  const initialValue = props.value !== undefined ? String(props.value) : props.defaultValue !== undefined ? String(props.defaultValue) : options[0]?.value ?? "";
  const [internalValue, setInternalValue] = useState<string>(initialValue);
  const [open, setOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useEffect(function syncControlledValue() {
    if (props.value !== undefined) {
      setInternalValue(String(props.value));
    }
  }, [props.value]);

  useEffect(function closeOnOutsideClick() {
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

  const selectedValue = props.value !== undefined ? String(props.value) : internalValue;
  const selectedOption = options.find(function findSelected(option) {
    return option.value === selectedValue;
  });

  function emitChange(nextValue: string) {
    if (props.value === undefined) {
      setInternalValue(nextValue);
    }

    if (props.onChange) {
      const syntheticEvent = {
        target: { value: nextValue, name: props.name },
        currentTarget: { value: nextValue, name: props.name }
      } as unknown as ChangeEvent<HTMLSelectElement>;
      props.onChange(syntheticEvent);
    }
  }

  function selectByIndex(index: number) {
    const option = options[index];
    if (!option || option.disabled) {
      return;
    }
    emitChange(option.value);
    setHighlightedIndex(index);
    setOpen(false);
  }

  function openAndHighlightSelected() {
    if (props.disabled) {
      return;
    }
    const currentIndex = options.findIndex(function findIndex(option) {
      return option.value === selectedValue;
    });
    setOpen(true);
    setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (props.disabled) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) {
        openAndHighlightSelected();
        return;
      }
      const next = Math.min(options.length - 1, highlightedIndex + 1);
      setHighlightedIndex(next);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        openAndHighlightSelected();
        return;
      }
      const next = Math.max(0, highlightedIndex - 1);
      setHighlightedIndex(next);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        openAndHighlightSelected();
      } else if (highlightedIndex >= 0) {
        selectByIndex(highlightedIndex);
      }
      return;
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <SelectRoot ref={rootRef}>
      {props.name ? <input type="hidden" name={props.name} value={selectedValue} /> : null}
      <SelectTrigger
        type="button"
        disabled={props.disabled}
        data-disabled={props.disabled ? "true" : "false"}
        data-open={open ? "true" : "false"}
        open={open}
        onClick={function onClick() {
          if (props.disabled) {
            return;
          }
          setOpen(!open);
          if (!open) {
            openAndHighlightSelected();
          }
        }}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedOption ? selectedOption.label : ""}
      </SelectTrigger>
      {open ? (
        <OptionsLayer>
          <OptionsList role="listbox">
            {options.map(function mapOption(option, index) {
              const selected = option.value === selectedValue;
              const highlighted = index === highlightedIndex;

              return (
                <li key={option.value}>
                  <OptionButton
                    type="button"
                    selected={selected}
                    highlighted={highlighted}
                    disabled={option.disabled}
                    onMouseEnter={function onMouseEnter() {
                      if (!option.disabled) {
                        setHighlightedIndex(index);
                      }
                    }}
                    onClick={function onClick() {
                      selectByIndex(index);
                    }}
                  >
                    {option.label}
                  </OptionButton>
                </li>
              );
            })}
          </OptionsList>
        </OptionsLayer>
      ) : null}
    </SelectRoot>
  );
}
