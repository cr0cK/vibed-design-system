export function toBooleanVariant(value: boolean | undefined): "true" | "false" {
  return value ? "true" : "false";
}
