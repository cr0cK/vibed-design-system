import type { HTMLAttributes } from "react";
import { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Tag } from "../../atoms/Tag/Tag";

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  options: MultiSelectOption[];
  value?: string[];
  placeholder?: string;
  onValueChange?: (nextValue: string[]) => void;
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", width: "100%", minWidth: 0 })
    .end();
});

const Trigger = styled.button(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      width: "100%",
      minWidth: 0,
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      textAlign: "left",
      display: "grid",
      gap: "var(--ds-space-xs)",
      padding: "0.5rem 0.65rem",
      cursor: "pointer"
    })
    .end();
});

const TagWrap = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "flex", flexWrap: "wrap", gap: "var(--ds-space-xxs)" })
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
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-sm)",
      zIndex: 20,
      maxHeight: "14rem",
      overflowY: "auto"
    })
    .end();
});

const Item = styled.li(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      gap: "var(--ds-space-xs)",
      padding: "0.45rem 0.5rem",
      borderRadius: "var(--ds-radius-sm)",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "var(--ds-color-surface-muted)"
      }
    })
    .end();
});

export function MultiSelect(props: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string[]>([]);
  const selectedValues = props.value ?? internalValue;

  const selectedOptions = useMemo(function mapSelected() {
    return props.options.filter(function filter(option) {
      return selectedValues.includes(option.value);
    });
  }, [props.options, selectedValues]);

  function toggleValue(value: string) {
    const hasValue = selectedValues.includes(value);
    const nextValues = hasValue
      ? selectedValues.filter(function filter(item) {
          return item !== value;
        })
      : [...selectedValues, value];

    if (props.value === undefined) {
      setInternalValue(nextValues);
    }
    if (props.onValueChange) {
      props.onValueChange(nextValues);
    }
  }

  return (
    <Root className={props.className}>
      <Trigger type="button" onClick={function onClick() { setOpen(!open); }}>
        {selectedOptions.length === 0 ? (
          <span>{props.placeholder ?? "Select options"}</span>
        ) : (
          <TagWrap>
            {selectedOptions.map(function mapOption(option) {
              return <Tag key={option.value} tone="primary">{option.label}</Tag>;
            })}
          </TagWrap>
        )}
      </Trigger>
      {open ? (
        <List role="listbox" aria-multiselectable="true">
          {props.options.map(function mapOption(option) {
            const checked = selectedValues.includes(option.value);
            return (
              <Item
                key={option.value}
                role="option"
                aria-selected={checked}
                onClick={function onClick() {
                  toggleValue(option.value);
                }}
              >
                <input type="checkbox" checked={checked} readOnly />
                {option.label}
              </Item>
            );
          })}
        </List>
      ) : null}
    </Root>
  );
}
