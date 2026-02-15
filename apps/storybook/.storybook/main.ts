import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDirname: string = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../src/stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag"
  },
  async viteFinal(config) {
    const nextConfig = config;
    nextConfig.resolve = nextConfig.resolve ?? {};
    nextConfig.resolve.alias = {
      ...(nextConfig.resolve.alias ?? {}),
      "@vibed/design-system": path.resolve(currentDirname, "../../../packages/design-system/src/index.ts")
    };
    return nextConfig;
  }
};

export default config;
