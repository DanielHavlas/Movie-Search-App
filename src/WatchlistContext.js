import React,{useState} from 'react'
const WatchlistContext = React.createContext()

function WatchlistContextProvider(props){
    const [watchlistArray, setWatchlistArray] = useState([])

    function watchlist(id){
        if(watchlistArray.includes(id)){
            const array = JSON.parse(localStorage.getItem('watchlist'))
            const i = array.indexOf(id)
            array.splice(i,1)
            setWatchlistArray(()=>{
                localStorage.setItem('watchlist',JSON.stringify(array))
                return array
            })
        }else{
            setWatchlistArray(prevArray => {
                localStorage.setItem('watchlist',JSON.stringify([ ...new Set([...prevArray,id])]))
                return [...prevArray, id]
            })
        }
    }
    return(
        <WatchlistContext.Provider value={{watchlistArray,watchlist}}>
            {props.children}
        </WatchlistContext.Provider>
    )
}

export {WatchlistContextProvider, WatchlistContext}