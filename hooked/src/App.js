import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home"
import Watch from "./routes/Watch";

const App = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [pushButton, setPushButton] = useState(false);
    return (
        <div className="App">
            <Routes>
                <Route path="/movie-search-app" element={<Home watchlist={watchlist} setWatchlist={setWatchlist} pushButton={pushButton} setPushButton={setPushButton} />} /> {/*RouteにHomeを設定する*/}
                <Route path="/movie-search-app/watchlist" element={<Watch watchlist={watchlist} setWatchlist={setWatchlist} pushButton={pushButton} setPushButton={setPushButton} />} />
            </Routes>
        </div>
    );
}

export default App;