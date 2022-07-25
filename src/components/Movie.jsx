import React,{useState, useContext} from "react"
import {Link} from 'react-router-dom'

import { WatchlistContext } from "../WatchlistContext"
import star from "../images/star.png"

export default function(props){

    const [filmData, setFilmData] = useState({})

    fetch(`https://www.omdbapi.com/?apikey=dae90303&i=${props.id}`)
    .then(res => res.json())
    .then(data => setFilmData(data))

    const {watchlist} = useContext(WatchlistContext)


    

    return(
        <>
            <Link to={`/movie/${props.id}`} >
                <article className="grid film">
                    <img className="poster" src={filmData.Poster} alt="" />
                    <div class="right">
                        <div className="title flex">
                            <h3 className="text-white fs-3">{filmData.Title}</h3>
                            <img className="star" src={star} alt="" />
                            <p className="text-white">{filmData.imdbRating}</p>
                        </div>
                        <div className="flex fs-5 gap-2">
                            <p className="text-white">{filmData.Runtime}</p>
                            <p className="text-white">{filmData.Genre}</p>
                            <button onClick={(e)=> {watchlist(props.id); e.preventDefault()}} className="wathclist-btn flex gap-1">
                                <img src={props.icon} alt="" />
                                <p className="text-white">{props.text}</p>
                            </button>
                        </div>
                        <p className="text-light fs-4 lh-20 invisible">{filmData.Plot}</p>
                    </div>
                </article>
            </Link>
            {props.line?<hr/>:''}
        </>
    )
}