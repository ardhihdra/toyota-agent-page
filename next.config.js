/** @type {import('next').NextConfig} */
// const withCSS = require('@zeit/next-css');

// const nextConfig = {
//   ...withCSS({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'css-loader',
//             options: {
//               url: false,
//             },
//           },
//         ],
//       });
  
//       return config;
//     },
//   })
// }
nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
