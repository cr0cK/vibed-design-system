import type { StorybookConfig } from "@storybook/react-vite";
const designSystemEntryPath: string = new URL("../../../packages/design-system/src/index.ts", import.meta.url).pathname;

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag"
  },
  async viteFinal(config) {
    const nextConfig = config;
    nextConfig.resolve = nextConfig.resolve ?? {};
    nextConfig.resolve.alias = {
      ...(nextConfig.resolve.alias ?? {}),
      "@vibed/design-system": designSystemEntryPath
    };
    return nextConfig;
  }
};

export default config;
