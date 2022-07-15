import React from 'react'
import {Link} from 'react-router-dom'

export default function Header({header}){

    const link = header===1? '/watchlist':'/'
    const heading = header===1? 'Movie search':'Watchlist'
    const text = header===1? 'My watchlist':'Search for movies'

    return(
        <header>
            <div className='flex width container header'>
                <h1 className="text-white fw-800 fs-1">{heading}</h1>
                <Link to={link} className='text-white fs-2'>{text}</Link>
            </div>
        </header>
    )
}