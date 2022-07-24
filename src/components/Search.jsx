import React, {useState, useContext} from 'react'
import Select from 'react-select'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

import { WatchlistContext } from "../WatchlistContext"
import Header from './Header'

import searchIcon from '../images/search.png'
import filmicon from '../images/filmicon.png'
import Movie from './Movie'
import plus from "../images/plus.png"
import minus from "../images/minus.png"

export default function Page(props){

    const {watchlistArray} = useContext(WatchlistContext)

    const [searchData,setSearchData] = useState([])
    const [inputValue, setInputValue] = useState()
    const [hasSearched, setHasSearched] = useState()
    const [options, setOptions] = useState([])
    const url = `https://www.omdbapi.com/?apikey=dae90303&s=${inputValue}`
    const navigate = useNavigate()


    useEffect(()=>{
        setHasSearched(false)
    },[])
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setSearchData(data)
        })

    },[inputValue])


    const search = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setSearchData(data)
            setHasSearched(true)
        })
    }

    const handleChange = (opt) => {

        return(
            navigate(`/movie/${opt.value}`)
        )
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
    
    function key(input){
        setInputValue(input)
        if(searchData.Response === 'True'){
            
            const options = searchData.Search.map(film => {
                console.log(film)
                return{
                    value: film.imdbID,
                    label: film.Title,
                }
            })
            setOptions(options)

        }else if(input===''){
            setOptions([])
        }
    }
 
    return(
        <div>
            <Header header={1}/>
            <div className='container'>
                <div className='bg-dark search-bar'>
                    <div class='icon-container'>
                        <img class='search-icon' src={searchIcon} alt="" />
                    </div>
                    {/* <input onChange={handleChange} autoComplete="off" className='search-input bg-dark text-white' type="text" /> */}
                    <Select onInputChange={key} inputValue={inputValue} onChange={handleChange} className='select' options={options}/>
                    <button onClick={search} className='search-button bg-grey fw-500 text-white'>Search</button>
                </div>
            </div>
            {content()}
        </div>
    )
}