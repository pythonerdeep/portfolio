// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     applyCssImports: true,
//   },
//   basePath: '/github-pages',
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  distDir: "out",
  reactStrictMode: true,
};

module.exports = nextConfig;