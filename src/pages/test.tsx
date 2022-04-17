// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby";
import Layout from '../components/layout';

// Step 2: Define your component
const BlogPage = () => {
    return (
        <Layout pageTitle='About Me'>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <Link to="/">Back</Link>
        </Layout>
    )
}

// Step 3: Export your component
export default BlogPage