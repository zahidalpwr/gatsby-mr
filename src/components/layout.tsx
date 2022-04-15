import * as React from 'react'
import { Link } from 'gatsby'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText // @ts-ignore
} from './layout.module.css'

type Props = {
    pageTitle: string,
}
const Layout: React.FC<Props> = ({ pageTitle, children }) => {
    console.log(typeof  children);
    return (
        <div className={container}>
            <title>{pageTitle}</title>
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