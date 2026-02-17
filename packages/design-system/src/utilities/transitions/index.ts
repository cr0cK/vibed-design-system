export interface TransitionPreset {
  enter: string;
  exit: string;
  durationMs: number;
  easing: string;
}

export const fadeTransition: TransitionPreset = {
  enter: "opacity: 1;",
  exit: "opacity: 0;",
  durationMs: 160,
  easing: "ease"
};

export const scaleTransition: TransitionPreset = {
  enter: "opacity: 1; transform: scale(1);",
  exit: "opacity: 0; transform: scale(0.98);",
  durationMs: 180,
  easing: "cubic-bezier(.2,.8,.2,1)"
};

export function getTransitionCss(preset: TransitionPreset): string {
  return `transition: all ${preset.durationMs}ms ${preset.easing};`;
}
