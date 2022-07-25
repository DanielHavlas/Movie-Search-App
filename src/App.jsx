import React, {useState, useEffect} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Search from './components/Search'
import Watchlist from './components/Watchlist'
import MovieDetailPage from './components/MovieDetailPage'


function App() {

 


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Search />}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
