import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    siteTitle,
    navLinkText // @ts-ignore
} from './layout.module.css'

type Props = {
    pageTitle: string,
}
const Layout: React.FC<Props> = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
                                    query {
                                        site {
                                            siteMetadata {
                                            title
                                            }
                                        }
                                    }
                                `);
    //console.log("Data: ", JSON.stringify(data));
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout