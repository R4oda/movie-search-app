import React from "react";
import Header from "../components/Header";
import List from "../components/List";


const Watch = ({ watchlist, setWatchlist, setPushButton }) => {

    const removeFromWatchlist = (movie) => {
        const updatedWatchlist = watchlist.filter(item => item !== movie);
        setWatchlist(updatedWatchlist);
        setPushButton(false);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    }

  return (
    <div className="Watchlist">
      <Header text="映画検索アプリ" home="Home" watchlist="Watchlist" />
      <List watchlist={watchlist} setWatchlist={setWatchlist} removeFromWatchlist={removeFromWatchlist} />
    </div>
  );
};


export default Watch;