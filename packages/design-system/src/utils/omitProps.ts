export function omitProps<TSource extends Record<string, unknown>, TKey extends keyof TSource>(
  source: TSource,
  keys: readonly TKey[]
): Omit<TSource, TKey> {
  const output: Record<string, unknown> = { ...source };

  for (const key of keys) {
    delete output[String(key)];
  }

  return output as Omit<TSource, TKey>;
}
