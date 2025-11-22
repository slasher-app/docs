import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePlugins: [
      // Provide only on `build` since turbopack on `dev` supports only serializable values
      process.env.NODE_ENV === "production" && rehypeOpenGraphImage,
    ].filter((v) => !!v),
  },
});

// Export the final Next.js config with Nextra included
export default withNextra({
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
