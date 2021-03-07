module.exports = {
  siteMetadata: {
    title: 'Carson Bain Photography',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'yyuxONiBm04Jj9UulN7oqdyfOrppVWHUZ_MnnKaTPH4',
        spaceId: 'kkahdtur6i1v',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
