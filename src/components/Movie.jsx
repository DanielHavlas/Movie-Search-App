import React,{useState, useContext} from "react"
import { WatchlistContext } from "../WatchlistContext"

export default function(props){

    const [filmData, setFilmData] = useState({})

    fetch(`https://www.omdbapi.com/?apikey=dae90303&i=${props.id}`)
    .then(res => res.json())
    .then(data => setFilmData(data))

    const {watchlist} = useContext(WatchlistContext)


    

    return(
        <div>
            <article className="grid film">
                <img className="poster" src={filmData.Poster} alt="" />
                <div class="right">
                    <div className="flex">
                        <h3 className="text-white fs-3">{filmData.Title}</h3>
                        <img src="" alt="" />
                        <p className="text-white">{filmData.imdbRating}</p>
                    </div>
                    <div className="flex fs-5 gap-2">
                        <p className="text-white">{filmData.Runtime}</p>
                        <p className="text-white">{filmData.Genre}</p>
                        <button onClick={()=> watchlist(props.id)} className="flex gap-1">
                            <img src={props.icon} alt="" />
                            <p className="text-white">{props.text}</p>
                        </button>
                    </div>
                    <p className="text-light fs-4 lh-20">{filmData.Plot}</p>
                </div>
            </article>
            {props.line?'':<hr/>}
        </div>
    )
}