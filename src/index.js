import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {WatchlistContextProvider} from './WatchlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <WatchlistContextProvider>
            <App />
        </WatchlistContextProvider>
    </BrowserRouter>
);
