/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Falk Web Design',
    description: 'Effective Website Design and Development for Business and personal use, all at a cheap price!',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/imgs/FavIcon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-TELVE588ZM",
        ],
        pluginConfig: {
          head: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
}
