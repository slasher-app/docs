import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
});

// Export the final Next.js config with Nextra included
export default withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "./components/icons/*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  experimental: {
    optimizePackageImports: ["@components/icons"],
  },
});
