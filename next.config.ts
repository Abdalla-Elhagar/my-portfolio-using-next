const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // استخدم SWC بدلاً من Babel
  experimental: {
    legacyBrowsers: false, // يمنع دعم المتصفحات القديمة زي IE
  },
};

module.exports = nextConfig;