module.exports = {

  siteMetadata: {
    title: 'Enhance Digital',
  },

  pathPrefix: '/kettle-corn',

  plugins: [

    'gatsby-plugin-react-helmet',

    'gatsby-plugin-styled-components',

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography.js',
      },
    }

  ],
}
