import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

//取得した映画データがmovie propsとして渡ってくる
const Movie = ({ movie }) => {
    //JavaScriptの三項演算子を使用
    // movie.PosterがN/Aの場合はDEFAULT_PLACEHOLDER_IMAGEを使用する記述
    
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            {/* movie propsのTitleプロパティをタイトルとして設定 */}
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
};


export default Movie;