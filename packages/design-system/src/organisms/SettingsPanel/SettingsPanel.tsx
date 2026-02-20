import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Heading } from "../../atoms/Heading/Heading";
import { Text } from "../../atoms/Text/Text";

export interface SettingsSection {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  content: ReactNode;
}

export interface SettingsPanelProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  sections: SettingsSection[];
}

const Root = styled.section(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "var(--ds-space-md)",
      width: "100%"
    })
    .end();
});

const Section = styled.article(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-md)",
      display: "grid",
      gap: "var(--ds-space-sm)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .end();
});

export function SettingsPanel(props: SettingsPanelProps) {
  return (
    <Root data-attr-name="SettingsPanel" className={props.className}>
      {props.heading ? <Heading level={3}>{props.heading}</Heading> : null}
      {props.sections.map(function mapSection(section) {
        return (
          <Section key={section.id}>
            <Heading level={5}>{section.title}</Heading>
            {section.description ? <Text size="sm" tone="muted">{section.description}</Text> : null}
            <div>{section.content}</div>
          </Section>
        );
      })}
    </Root>
  );
}
