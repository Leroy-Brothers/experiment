module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Leroy Brothers', // Navigation and Site Title
  siteTitleAlt: 'Leroy Brothers - Experiments', // Alternative Site title for SEO
  siteTitleManifest: 'Experiments',
  siteUrl: 'https://leroybrothers.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Creating Artwork for Ages', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'static/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Pocket gallery featuring our latest creations.', // Your site description
  author: 'LeroyBrothers', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@leroybrothers', // Twitter Username - Optional
  ogSiteName: 'experiments', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-6',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
