module.exports = {
  siteMetadata: {
    title: 'Enhance Digital',
  },

  plugins: [
    'gatsby-plugin-react-helmet',

    'gatsby-plugin-styled-components',

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography.js',
      },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-108251862-1',
      },
    },
  ],
};
