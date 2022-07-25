import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function Header(){

    const location = useLocation()
    console.log(location);
    const heading = location.pathname==='/'? 'Find your film' : location.pathname==='/watchlist'? 'My watchlist': ''



    return(
        <header>
            <div className='flex width container header'>
                <h1 className="text-white fw-800 fs-1">{heading}</h1>
                <nav className='flex gap-2'>
                    <Link to={'/'} className='text-white fs-2'>Search</Link>
                    <Link to={'/watchlist'} className='text-white fs-2'>Watchlist</Link>
                </nav>
            </div>
        </header>
    )
}