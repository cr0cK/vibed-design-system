import { newBuildVariants } from "@productive-codebases/build-variants";
import { css } from "@emotion/css";

type EmotionStyleObject = Extract<Parameters<typeof css>[0], object>;

/**
 * Configured build-variants factory for this design system.
 */
export function buildVariants<TProps extends object>(
  props: TProps
): ReturnType<typeof newBuildVariants<TProps, EmotionStyleObject>> {
  return newBuildVariants<TProps, EmotionStyleObject>(props);
}
