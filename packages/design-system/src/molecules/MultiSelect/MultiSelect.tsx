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

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", width: "100%", minWidth: 0 })
    .end();
});

const Trigger = styled.button<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
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
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { minHeight: "2rem", fontSize: "0.86rem", padding: "0.35rem 0.55rem" },
      md: { minHeight: "2.3rem", fontSize: "0.92rem", padding: "0.5rem 0.65rem" },
      lg: { minHeight: "2.6rem", fontSize: "1rem", padding: "0.62rem 0.78rem" }
    })
    .end();
});

const TagWrap = styled.div<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({ display: "flex", flexWrap: "wrap", gap: "var(--ds-space-xxs)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "0.2rem" },
      md: { gap: "var(--ds-space-xxs)" },
      lg: { gap: "var(--ds-space-xs)" }
    })
    .end();
});

const List = styled.ul<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
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
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { top: "calc(100% + 0.2rem)" },
      md: { top: "calc(100% + 0.25rem)" },
      lg: { top: "calc(100% + 0.3rem)" }
    })
    .end();
});

const Item = styled.li<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
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
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "0.34rem 0.4rem", fontSize: "0.84rem" },
      md: { padding: "0.45rem 0.5rem", fontSize: "0.9rem" },
      lg: { padding: "0.56rem 0.62rem", fontSize: "0.98rem" }
    })
    .end();
});

const ItemCheckbox = styled.input<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({
      margin: 0
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { width: "0.75rem", height: "0.75rem" },
      md: { width: "0.85rem", height: "0.85rem" },
      lg: { width: "1rem", height: "1rem" }
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
      <Trigger controlSize={props.controlSize} type="button" onClick={function onClick() { setOpen(!open); }}>
        {selectedOptions.length === 0 ? (
          <span>{props.placeholder ?? "Select options"}</span>
        ) : (
          <TagWrap controlSize={props.controlSize}>
            {selectedOptions.map(function mapOption(option) {
              return <Tag key={option.value} tone="primary" controlSize={props.controlSize}>{option.label}</Tag>;
            })}
          </TagWrap>
        )}
      </Trigger>
      {open ? (
        <List controlSize={props.controlSize} role="listbox" aria-multiselectable="true">
          {props.options.map(function mapOption(option) {
            const checked = selectedValues.includes(option.value);
            return (
              <Item
                controlSize={props.controlSize}
                key={option.value}
                role="option"
                aria-selected={checked}
                onClick={function onClick() {
                  toggleValue(option.value);
                }}
              >
                <ItemCheckbox controlSize={props.controlSize} type="checkbox" checked={checked} readOnly />
                {option.label}
              </Item>
            );
          })}
        </List>
      ) : null}
    </Root>
  );
}
