import type { HTMLAttributes, KeyboardEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps extends HTMLAttributes<HTMLDivElement> {
  options: ComboboxOption[];
  value?: string;
  placeholder?: string;
  onValueChange?: (nextValue: string) => void;
  controlSize?: "sm" | "md" | "lg";
}

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", width: "100%", minWidth: 0 })
    .end();
});

const Input = styled.input<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({
      width: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      outline: "none"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "0.4rem 0.62rem", fontSize: "0.86rem", minHeight: "2rem" },
      md: { padding: "0.55rem 0.72rem", fontSize: "0.95rem", minHeight: "2.25rem" },
      lg: { padding: "0.68rem 0.86rem", fontSize: "1rem", minHeight: "2.5rem" }
    })
    .end();
});

const List = styled.ul(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      listStyle: "none",
      margin: 0,
      padding: "0.25rem",
      position: "absolute",
      top: "calc(100% + 0.25rem)",
      insetInline: 0,
      maxHeight: "14rem",
      overflowY: "auto",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-sm)",
      zIndex: 20
    })
    .end();
});

interface OptionProps {
  highlighted?: boolean;
}

const Option = styled.li<OptionProps>(function style(props) {
  return buildVariants<OptionProps>(props)
    .css({
      padding: "0.45rem 0.5rem",
      borderRadius: "var(--ds-radius-sm)",
      cursor: "pointer",
      backgroundColor: props.highlighted ? "color-mix(in oklab, var(--ds-color-primary) 12%, var(--ds-color-surface))" : "transparent"
    })
    .end();
});

export function Combobox(props: ComboboxProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const selected = props.options.find(function find(option) {
    return option.value === props.value;
  });
  const [query, setQuery] = useState(selected?.label ?? "");

  useEffect(function syncValueLabel() {
    const nextSelected = props.options.find(function find(option) {
      return option.value === props.value;
    });
    if (props.value !== undefined) {
      setQuery(nextSelected?.label ?? "");
    }
  }, [props.value, props.options]);

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

  const filteredOptions = useMemo(function filterOptions() {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) {
      return props.options;
    }
    return props.options.filter(function filter(option) {
      return option.label.toLowerCase().includes(normalizedQuery);
    });
  }, [props.options, query]);

  function selectOption(value: string, label: string) {
    setQuery(label);
    setOpen(false);
    if (props.onValueChange) {
      props.onValueChange(value);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      event.preventDefault();
      setOpen(true);
      return;
    }

    if (!open || filteredOptions.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex(Math.min(filteredOptions.length - 1, highlightedIndex + 1));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex(Math.max(0, highlightedIndex - 1));
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const next = filteredOptions[highlightedIndex];
      if (next) {
        selectOption(next.value, next.label);
      }
      return;
    }
    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Root data-attr-name="Combobox" ref={rootRef} className={props.className}>
      <Input
        controlSize={props.controlSize}
        value={query}
        placeholder={props.placeholder}
        onFocus={function onFocus() {
          setOpen(true);
        }}
        onChange={function onChange(event) {
          setQuery(event.target.value);
          setOpen(true);
          setHighlightedIndex(0);
        }}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
      />
      {open && filteredOptions.length > 0 ? (
        <List role="listbox">
          {filteredOptions.map(function mapOption(option, index) {
            return (
              <Option
                key={option.value}
                role="option"
                highlighted={index === highlightedIndex}
                onMouseEnter={function onMouseEnter() {
                  setHighlightedIndex(index);
                }}
                onClick={function onClick() {
                  selectOption(option.value, option.label);
                }}
              >
                {option.label}
              </Option>
            );
          })}
        </List>
      ) : null}
    </Root>
  );
}
