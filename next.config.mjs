import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/, // Support .mdx files
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'], // Add .mdx to page extensions
  webpack: (config, options) => {
    // Keep your GLSL loader setup
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  },
}

export default withMDX(nextConfig)
