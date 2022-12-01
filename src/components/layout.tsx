import * as React from 'react';
import { Link } from 'gatsby';

export interface ILayoutProps {
    pageTitle: string,
    children: React.ReactNode;
};

const Layout = (props: ILayoutProps) => {
    const { pageTitle, children } = props;
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;