module.exports = {
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      "gatsby-plugin-styled-components",
      {
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: `mmwi230204`
        }
      },
    ]
};