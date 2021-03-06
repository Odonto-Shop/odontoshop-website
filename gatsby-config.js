module.exports = {
  siteMetadata: {
    title: `Odonto Shop`,
    description: `Website of Odonto Shop.`,
    author: `@laurielmesquita`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Cairo',
          'Roboto:300,400,500,400i,700',
          'Frank Ruhl Libre:300,400,500,700',
          'DM Sans:400,400i,500,500i,700,700i',
          'Lato',
          'Comfortaa:300,400,500,600,700',
          'Playfair Display',
          'Anton',
          'Abril Fatface',
          'Montserrat:700',
          'DM Sans:500,700',
          'Roboto:400,500',
          'Open Sans:400,600,700'
        ]
      }
    },
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
