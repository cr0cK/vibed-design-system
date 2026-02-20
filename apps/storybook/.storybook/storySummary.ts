export interface StorySummary {
  title: string;
  what: string;
  how: string;
}

const categoryWhatMap: Record<string, string> = {
  Atoms: "Foundational primitive for layout, typography, form, or interaction.",
  Molecules: "Composed control built from atoms for common UI patterns.",
  Organisms: "Feature-level surface combining multiple controls and behaviors.",
  Showcase: "End-to-end composition demonstrating components working together.",
  Themes: "Theme and token preview showing visual system variations."
};

const categoryHowMap: Record<string, string> = {
  Atoms: "Use it as a base building block and customize via typed variants.",
  Molecules: "Use it to cover common workflows before creating custom compositions.",
  Organisms: "Use it as a ready-to-integrate section and wire app state through props.",
  Showcase: "Use it as a reference implementation for structure, spacing, and state patterns.",
  Themes: "Use it to compare themes and validate token-driven consistency."
};

function normalizeName(value: string): string {
  return value.replace(/\./g, " ");
}

export function getStorySummary(title: string): StorySummary | null {
  const parts = title.split("/");
  const category = parts[0] ?? "";
  const rawName = parts[parts.length - 1] ?? "";

  if (!category || !rawName || category === "Documentation") {
    return null;
  }

  const componentName = normalizeName(rawName);
  const whatPrefix = categoryWhatMap[category] ?? "Reusable design-system component.";
  const howPrefix = categoryHowMap[category] ?? "Use typed props and DS tokens for composition.";

  return {
    title: `${componentName} quick summary`,
    what: `What: ${componentName} is a ${whatPrefix.toLowerCase()}`,
    how: `How: ${howPrefix}`
  };
}
