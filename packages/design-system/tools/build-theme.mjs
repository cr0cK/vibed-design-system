import fs from "node:fs";
import path from "node:path";

function usage() {
  console.log("Usage: node tools.build-theme.mjs <input-json> <output-css>");
}

function buildCssVars(theme) {
  return `:root {\n  --ds-color-background: ${theme.colors.background};\n  --ds-color-surface: ${theme.colors.surface};\n  --ds-color-surface-muted: ${theme.colors.surfaceMuted};\n  --ds-color-border: ${theme.colors.border};\n  --ds-color-text: ${theme.colors.text};\n  --ds-color-text-muted: ${theme.colors.textMuted};\n  --ds-color-primary: ${theme.colors.primary};\n  --ds-color-primary-contrast: ${theme.colors.primaryContrast};\n  --ds-color-danger: ${theme.colors.danger};\n  --ds-color-danger-contrast: ${theme.colors.dangerContrast};\n  --ds-color-success: ${theme.colors.success};\n}\n`;
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  usage();
  process.exit(1);
}

const inputJson = fs.readFileSync(path.resolve(inputPath), "utf8");
const parsedTheme = JSON.parse(inputJson);
const cssOutput = buildCssVars(parsedTheme);

fs.writeFileSync(path.resolve(outputPath), cssOutput, "utf8");
console.log(`Theme CSS written to ${outputPath}`);
