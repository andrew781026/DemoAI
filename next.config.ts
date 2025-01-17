import type { NextConfig } from 'next';

const githubRepoName = 'DemoAI';

const nextConfig: NextConfig = {
  /* config options here */

  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',

  basePath: '/' + githubRepoName,
  assetPrefix: '/' + githubRepoName,

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
};

export default nextConfig;
