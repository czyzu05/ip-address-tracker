import React from 'react'

const Header = ({children}) => {
    return (
        <h1 className="appTitle">
            {children}
        </h1>
    )
}

export default Header
