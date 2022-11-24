module.exports = {
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-styled-components",
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: `mmwi230204`
        }
      },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/_data/comments`,
        name: 'comments',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icon.png',
      },
    }
    ]
};