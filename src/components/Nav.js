import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to='/'>
                <h3>
                    HOME
                </h3>
            </Link>
            <Link to='/about'>
                <h3>
                    ABOUT
                </h3>
            </Link>
            <Link to='/stocks'>
                <h3>
                    STOCKS
                </h3>
            </Link>
        </div>
    )
}

export default Nav