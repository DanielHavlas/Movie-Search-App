import plus from "../images/plus.png"
import minus from "../images/minus.png"
import Movie from './Movie'
import {Link} from 'react-router-dom'
import React,{useContext} from "react"
import { WatchlistContext } from "../WatchlistContext"
import Header from './Header'

export default function Watchlist(props){

    const {watchlistArray} = useContext(WatchlistContext)

    const main = watchlistArray.map((id, index) => {
        const line= (index !== watchlistArray.length-1)
        return <Movie key={index} id={id} line={line} icon={minus} text={'Remove'}/>
    })

    const empty = () => {
        return(
            <div className="center-vert ">
                <p className='text-grey fs-3 fw-700'>Your watchlist is looking a little empty...</p>
                <Link to='/' className="flex gap-1 empty-watchlist">
                    <img src={plus} alt="" />
                    <p className="text-white fs-4">Let's add some movies!</p>
                </Link>
            </div>
        )
    }

    return(
        <div>
            <Header header={2}/>
            {watchlistArray.length !== 0? <div className='container'> {main} </div>:empty()} 
        </div>
    )
}