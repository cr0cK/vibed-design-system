import type { HTMLAttributes, KeyboardEvent } from "react";
import { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface AutocompleteProps extends HTMLAttributes<HTMLDivElement> {
  suggestions: string[];
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
      maxHeight: "12rem",
      overflowY: "auto",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-sm)",
      zIndex: 20
    })
    .end();
});

interface ItemProps {
  highlighted?: boolean;
}

const Item = styled.li<ItemProps>(function style(props) {
  return buildVariants<ItemProps>(props)
    .css({
      padding: "0.45rem 0.5rem",
      borderRadius: "var(--ds-radius-sm)",
      cursor: "pointer",
      backgroundColor: props.highlighted ? "color-mix(in oklab, var(--ds-color-primary) 12%, var(--ds-color-surface))" : "transparent"
    })
    .end();
});

/**
 * Molecule component that renders the Autocomplete primitive.
 */
export function Autocomplete(props: AutocompleteProps) {
  const [internalValue, setInternalValue] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const value = props.value ?? internalValue;

  const filtered = useMemo(function filterSuggestions() {
    const normalized = value.toLowerCase().trim();
    if (!normalized) {
      return props.suggestions;
    }
    return props.suggestions.filter(function filter(item) {
      return item.toLowerCase().includes(normalized);
    });
  }, [props.suggestions, value]);

  function commit(nextValue: string) {
    if (props.value === undefined) {
      setInternalValue(nextValue);
    }
    if (props.onValueChange) {
      props.onValueChange(nextValue);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (!open || filtered.length === 0) {
      return;
    }

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
      const next = filtered[highlightedIndex];
      if (next) {
        commit(next);
        setOpen(false);
      }
      return;
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Root data-attr-name="Autocomplete" className={props.className}>
      <Input
        controlSize={props.controlSize}
        value={value}
        placeholder={props.placeholder}
        onFocus={function onFocus() {
          setOpen(true);
        }}
        onChange={function onChange(event) {
          commit(event.target.value);
          setOpen(true);
          setHighlightedIndex(0);
        }}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded={open}
      />
      {open && filtered.length > 0 ? (
        <List role="listbox">
          {filtered.map(function mapSuggestion(item, index) {
            return (
              <Item
                key={`${item}-${index}`}
                role="option"
                highlighted={index === highlightedIndex}
                onMouseEnter={function onMouseEnter() {
                  setHighlightedIndex(index);
                }}
                onClick={function onClick() {
                  commit(item);
                  setOpen(false);
                }}
              >
                {item}
              </Item>
            );
          })}
        </List>
      ) : null}
    </Root>
  );
}
