import React,{useState, useContext} from "react"
import {useParams} from 'react-router-dom'

import { WatchlistContext } from "../WatchlistContext"

export default function(){

    const [filmData, setFilmData] = useState({})
    const {imdbID} = useParams()

    fetch(`https://www.omdbapi.com/?apikey=dae90303&i=${imdbID}&plot=full`)
    .then(res => res.json())
    .then(data => setFilmData(data))

    const {watchlist} = useContext(WatchlistContext)


    

    return(
        <div>
            <article className="film-detail">
                <div className="flex title">
                    <h3 className="text-white fs-3 overflow">{filmData.Title}</h3>
                    <img src="" alt="" />
                    <p className="text-white">{filmData.imdbRating}</p>
                </div>
                <div className="flex gap-2">
                    <img className="detail-poster" src={filmData.Poster} alt="" />
                    <div class="right">
                        <div className="flex fs-5 gap-2">
                            <p className="text-white">{filmData.Runtime}</p>
                            <p className="text-white">{filmData.Genre}</p>
                            <button onClick={()=> watchlist(imdbID)} className="flex gap-1">
                                <img src={'icon'} alt="" />
                                <p className="text-white">{'watchlist'}</p>
                            </button>
                        </div>
                        <p className="text-light fs-4 lh-20">{filmData.Plot}</p>
                    </div>
                </div>
            </article>
        </div>
    )
}