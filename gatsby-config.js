module.exports = {
  siteMetadata: {
    title: `Odonto Shop`,
    description: `Website of Odonto Shop.`,
    author: `@laurielmesquita`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Open Sans',
              variants: ['400', '600', '700']
            }
          ]
        }
      }
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/odontoshop-icon.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`
  ]
}
