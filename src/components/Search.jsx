import searchIcon from '../images/search.png'
import filmicon from '../images/filmicon.png'
import Movie from './Movie'
import plus from "../images/plus.png"
import minus from "../images/minus.png"
import React, {useState, useContext} from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { WatchlistContext } from "../WatchlistContext"

export default function Page(props){

    const {watchlistArray} = useContext(WatchlistContext)

    const [searchData,setSearchData] = useState([])
    const [inputValue, setInputValue] = useState()
    const [hasSearched, setHasSearched] = useState()
    useEffect(()=>{
        setHasSearched(false)
    },[])
    
    useEffect(()=>{
        console.log(searchData)

    },[searchData])


    const search = () => {
        fetch(`https://www.omdbapi.com/?apikey=dae90303&s=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            setSearchData(data)
            setHasSearched(true)
        })
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

   
    

    const empty = () => {
        return(
            <div class='empty'>
                <img src={filmicon} alt="" />
                <p className='text-grey'>Start exploring</p>
            </div>
        )
    }

    const noResult = () => {
        return <p className='fs-3 fw-700 text-grey center-vert'>Unable to find what you're looking for. Please try another search</p>
    }

    const result = () => {
        if(searchData.Response == 'True'){
            const main = searchData.Search.map((film, index) => {
                const line = (index !== searchData.Search.length-1)
                const isWatchlisted = watchlistArray.includes(film.imdbID)
                const icon = isWatchlisted? minus : plus
                return <Movie key={index} id={film.imdbID} line={line} icon={icon} text={'Watchlist'}/>
            })
            return main
        }
    }


    const content = () => {
        if(hasSearched){
            if(searchData.Response === 'False'){
                return noResult()
            }
            else{
                return <div className='container'> {result()} </div>
            }
        }else{
            return empty()
        }
    }
     
 
    return(
        <div>
            <header>
                <div className='flex width container header'>
                    <h1 className="text-white fw-800 fs-1">Find your film</h1>
                    <Link to='/watchlist' className='text-white'>My watchlist</Link>
                    {/* <button onClick={() => props.setPage('watchlist')} className="text-white fw-700 fs-2">My Watchlist</button> */}
                </div>
            </header>
            <div className='container'>
                <div className='bg-dark search-bar'>
                    <div class='icon-container'>
                        <img class='search-icon' src={searchIcon} alt="" />
                    </div>
                    <input onChange={handleChange} autoComplete="off" className='search-input bg-dark text-white' type="text" />
                    <button onClick={search} className='search-button bg-grey fw-500 text-white'>Search</button>
                </div>
            </div>
            {content()}
        </div>
    )
}