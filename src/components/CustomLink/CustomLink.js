import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link
                // style={{ textDecoration: match ? 'underline' : 'none' }}
                className={
                    match
                        ? ' border-green-500 border-[3px] border-r-transparent border-r-[0px] border-l-transparent border-l-[0px]'
                        : 'none'
                }
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}

export default CustomLink
