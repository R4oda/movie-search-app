import React, {  useState,useEffect } from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

    const Movie = ({ movie, watchlist, setWatchlist }) => {
        const [pushButton, setPushButton] = useState(false);
    
        useEffect(() => {
            const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
            setWatchlist(storedWatchlist);
    
            // ボタンの状態をLocalStorageから復元されたウォッチリストに基づいて設定
            setPushButton(storedWatchlist.includes(movie.Title));
        }, [watchlist, movie.Title]); // ウォッチリストと映画のタイトルが変更されたときに再実行
    
        const addWatchlist = () => {
            const updatedWatchlist = [...watchlist, movie.Title];
            setWatchlist(updatedWatchlist);
            setPushButton(true);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        };
    
        const removeWatchlist = () => {
            const updatedWatchlist = watchlist.filter(item => item !== movie.Title);
            setWatchlist(updatedWatchlist);
            setPushButton(false);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        };
    
        const poster =
            movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    
        return (
            <div className="movie">
                <h2>{movie.Title}</h2>
                <div>
                    <img
                        width="200"
                        alt={`The movie titled: ${movie.Title}`}
                        src={poster}
                    />
                </div>
                <p>({movie.Year})</p>
                {!pushButton ? (
                    <button onClick={addWatchlist} value={movie.Title}>Add Watchlist</button>
                ) : (
                    <button onClick={removeWatchlist} value={movie.Title}>Remove Watchlist</button>
                )}
            </div>
        );
    };

export default Movie;