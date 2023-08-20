import React from "react"

const List = ({ watchlist,setWatchlist, removeFromWatchlist }) => {

    return (
        <>
            <h2>Watchlist</h2>
            {watchlist.map((movie, index) => (
                <div key={index} className="movie-item">
                    <p>{movie}</p>
                    <button onClick={() => removeFromWatchlist(movie)}>Remove</button>
                </div>
            ))}
        </>
    )
}
export default List;