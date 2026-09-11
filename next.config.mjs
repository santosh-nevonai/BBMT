/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Emit a fully static site into `out/` on `next build`. Every route in this
  // app is prerendered (SSG), so static export works end-to-end and is ideal
  // for a Render Static Site (no server, no cold starts).
  output: "export",

  // Serve each route as a folder with index.html (e.g. /about/index.html) so
  // static hosts like Render resolve clean URLs reliably.
  trailingSlash: true,

  images: {
    // Static export has no image optimization server, so images are served
    // as-is. All photography is local under /public/images.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
