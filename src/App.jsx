import Search from './components/Search'
import Watchlist from './components/Watchlist'
import React, {useState, useEffect} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

 


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Search />}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
