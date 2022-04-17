import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    backgroundColor: match ? "black" : "",
                    padding: match ? "5px 20px" : 'none',
                    borderRadius: match ? "15px" : "none",
                    color: match ? "white" : "black"
                }}

                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default CustomLink;