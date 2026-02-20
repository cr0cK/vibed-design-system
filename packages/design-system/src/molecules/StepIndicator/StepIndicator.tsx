import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export type StepStatus = "pending" | "active" | "done";

export interface StepItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
}

export interface StepIndicatorProps extends HTMLAttributes<HTMLOListElement> {
  steps: StepItem[];
  activeStepId: string;
}

interface StepNodeProps {
  status?: StepStatus;
}

const Root = styled.ol(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "grid",
      gap: "var(--ds-space-sm)"
    })
    .end();
});

const StepRow = styled.li(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--ds-space-sm)", alignItems: "start" })
    .end();
});

const Dot = styled.span<StepNodeProps>(function style(props) {
  return buildVariants<StepNodeProps>(props)
    .css({
      marginTop: "0.18rem",
      width: "1rem",
      height: "1rem",
      borderRadius: "var(--ds-radius-full)",
      border: "2px solid var(--ds-color-border)",
      display: "inline-grid",
      placeItems: "center",
      color: "var(--ds-color-surface)",
      position: "relative"
    })
    .variant("status", props.status ?? "pending", {
      pending: {
        borderColor: "var(--ds-color-border)",
        backgroundColor: "var(--ds-color-surface)"
      },
      active: {
        borderColor: "var(--ds-color-primary)",
        backgroundColor: "var(--ds-color-primary)"
      },
      done: {
        borderColor: "var(--ds-color-success)",
        backgroundColor: "var(--ds-color-success)"
      }
    })
    .end();
});

const DoneCheck = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      width: "0.34rem",
      height: "0.18rem",
      borderLeft: "2px solid currentColor",
      borderBottom: "2px solid currentColor",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -44%) rotate(-45deg)"
    })
    .end();
});

function getStatuses(steps: StepItem[], activeStepId: string): Record<string, StepStatus> {
  const activeIndex = steps.findIndex(function find(item) {
    return item.id === activeStepId;
  });

  const statusById: Record<string, StepStatus> = {};
  steps.forEach(function setStatus(step, index) {
    if (index < activeIndex) {
      statusById[step.id] = "done";
    } else if (index === activeIndex) {
      statusById[step.id] = "active";
    } else {
      statusById[step.id] = "pending";
    }
  });

  return statusById;
}

export function StepIndicator(props: StepIndicatorProps) {
  const statusById = getStatuses(props.steps, props.activeStepId);

  return (
    <Root data-attr-name="StepIndicator" className={props.className}>
      {props.steps.map(function mapStep(step) {
        const status = statusById[step.id] ?? "pending";
        return (
          <StepRow key={step.id}>
            <Dot status={status}>{status === "done" ? <DoneCheck aria-hidden="true" /> : null}</Dot>
            <div>
              <Text size="sm" weight={status === "active" ? "semibold" : "regular"}>{step.label}</Text>
              {step.description ? <Text size="sm" tone="muted">{step.description}</Text> : null}
            </div>
          </StepRow>
        );
      })}
    </Root>
  );
}
