/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/scss/__variables.scss"; @import "styles/scss/__mixins.scss";`, // prependData 옵션 추가
  },
}

module.exports = nextConfig
