import { useEffect } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { useToastStore } from "../../stores/toastStore";
import { Toast } from "../../molecules/Toast/Toast";

const Root = styled.section(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "fixed",
      bottom: "var(--ds-space-md)",
      right: "var(--ds-space-md)",
      display: "grid",
      gap: "var(--ds-space-sm)",
      zIndex: 80
    })
    .end();
});

export interface ToastViewportProps {
  defaultDurationMs?: number;
}

export function ToastViewport(props: ToastViewportProps) {
  const items = useToastStore(function getItems(state) {
    return state.items;
  });
  const dismissToast = useToastStore(function getDismiss(state) {
    return state.dismissToast;
  });

  useEffect(function autoDismiss() {
    const timers = items.map(function mapItem(item) {
      const timeout = item.durationMs ?? props.defaultDurationMs ?? 3500;
      return window.setTimeout(function onTimeout() {
        dismissToast(item.id);
      }, timeout);
    });

    return function cleanup() {
      timers.forEach(function clear(timer) {
        window.clearTimeout(timer);
      });
    };
  }, [items, dismissToast, props.defaultDurationMs]);

  if (items.length === 0) {
    return null;
  }

  return (
    <Root aria-live="polite" aria-atomic="true">
      {items.map(function mapToast(item) {
        return (
          <Toast
            key={item.id}
            heading={item.title}
            description={item.description}
            tone={item.tone}
            onClose={function onClose() {
              dismissToast(item.id);
            }}
          />
        );
      })}
    </Root>
  );
}
