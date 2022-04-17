import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

type Props = {
    data: any
}
const BlogPage: React.FC<Props> = ({ data }) => {
    console.log("Blog Data: ", JSON.stringify(data));
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map((node: any) => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage