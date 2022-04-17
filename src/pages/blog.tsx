import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type Props = {
    data: any
}
const BlogPage: React.FC<Props> = ({ data }) => {
    console.log("-------------------")
    console.log("Blog Data: ", data);
    console.log("-------------------")
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node: any) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>{node.body}</MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        body
      }
    }
  }
`

export default BlogPage