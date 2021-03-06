module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  pathPrefix: '/gastby-starter',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark'
  ]
};
