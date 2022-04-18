import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data }: any) => {
    //getImage is a helper function that takes in a File node or an ImageSharp node and returns the gatsbyImageData object for that node. You can use it to keep your code a little cleaner and easier to read.
    const image: any = getImage(data.mdx.frontmatter.hero_image)
    //data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
    //(which is longer, but gives you back the same data).

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}


export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost;