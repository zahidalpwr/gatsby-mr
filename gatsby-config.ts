import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Thanks to Gatsby`,
    siteUrl: `https://linspark.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/../../blog`,
        //path: `blog/`
      }
    },
    "gatsby-plugin-mdx",
  ],
}

export default config
