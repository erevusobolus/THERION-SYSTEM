/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://erevus.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: 0.7,
  changefreq: 'daily',
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/team'),
    await config.transform(config, '/games'),
    await config.transform(config, '/obolus'),
    await config.transform(config, '/therion'),
    await config.transform(config, '/contact'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://erevus.netlify.app/sitemap.xml',
    ],
  },
}
