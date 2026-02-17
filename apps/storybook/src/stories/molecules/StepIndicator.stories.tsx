import { Button, Stack, StepIndicator } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Molecules/StepIndicator", component: StepIndicator, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [activeStep, setActiveStep] = useState("schedule");

  return (
    <Stack gap="sm">
      <StepIndicator
        activeStepId={activeStep}
        steps={[
          { id: "setup", label: "Setup", description: "Define title and recipients" },
          { id: "schedule", label: "Schedule", description: "Choose date and frequency" },
          { id: "review", label: "Review", description: "Validate and publish" }
        ]}
      />
      <Button tone="neutral" size="sm" onClick={function onClick() { setActiveStep(activeStep === "schedule" ? "review" : "schedule"); }}>
        Toggle active step
      </Button>
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
