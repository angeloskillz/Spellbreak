module.exports = {
  siteMetadata: {
    title: `Spellbreak Wiki`,
    description: `The best Spellbreak wiki stats site.`,
    author: `AngeloCant1 & Skillz4Killz`,
    url: "https://www.sbwiki.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SBWIKI`,
        short_name: `SBWIKI`,
        start_url: `/`,
        background_color: `#F7B241`,
        theme_color: `#141b1e`,
        display: `Fullscreen`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-styled-components',
    "gatsby-plugin-offline",
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
