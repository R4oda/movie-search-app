import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Search from "../components/Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


const Home = ({ watchlist, setWatchlist, pushButton, setPushButton }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {

    // Fetch関数はリクエストを作成して指定されたURLを引数に実行します。
    // fetch関数はPromiseを返すので、thenメソッドを使用して非同期操作が成功した際の処理を書いていきます。
    fetch(MOVIE_API_URL)

      // 以下の処理はAPIからレスポンスを取得して、JSONデータをJavaScriptオブジェクトに解析する手順を表している。
      .then(response => response.json())

      // jsonResponseは、上の処理の戻り値を示す。
      .then(jsonResponse => {

        // 返ってきたPromiseオブジェクトをStateの更新関数を使ってmoviesに保持する処理。
        setMovies(jsonResponse.Search);

        // 検索の終了状態を表すため、loadingステートをfalseに設定する。
        setLoading(false);
      });

    // useEffectの第二引数が空の配列の場合、useEffectは初回のコンポーネントマウント時にのみ実行され、再レンダリング時には一切再実行されません。
  }, []);

  // search関数は検索キーワードを受け取り、APIを使用して映画を検索し、結果を状態に反映します。
  const search = searchValue => {

    // データの検索中の状態を表すため、loadingステートをtrueに設定します。
    setLoading(true);

    // 前回の検索でエラーが発生してた場合に、ユーザーに誤った情報を与えてしまう可能性がある。
    // そのため、新たな検索を行うたびに、エラーメッセージを空にしておく必要がある。
    setErrorMessage(null);

    // search関数の引数として渡ってくるsearchValueによって取得するデータを決定している。
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {

        // jsonResponse.Responseプロパティは、APIの応答が成功したかどうかを示す値を持っています。
        // 成功の場合はtrue、失敗の場合はfalseです。
        if (jsonResponse.Response === "True") {

          // 成功の場合は、返ってきた映画データをmoviesステートに格納する        
          setMovies(jsonResponse.Search);

          // 検索の終了状態を表すため、loadingステートをfalseに設定する。
          setLoading(false);
        } else {

          // 失敗の場合は、返ってきたエラーメッセージをerrorMessageステートに格納する 
          setErrorMessage(jsonResponse.Error);

          // 検索の終了状態を表すため、loadingステートをfalseに設定する。
          setLoading(false);
        }
      });
  };
  return (
    <div className="Home">

      <Header text="映画検索アプリ" home="Home" watchlist="Watchlist" />
      <Search search={search} />
      <p className="Home-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {/* loadingステートがtrue、errorMessageステートがfalseのときはloading状態を表す文字を出力 */}
        {loading && !errorMessage ? (
          <span>loading...</span>
          // errorMessageステートがtrueの場合は、エラーメッセージを出力
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
          // 上記二つ以外の場合に、moviesステートの情報を元にmapメソッドで新しい配列を作成
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} watchlist={watchlist} setWatchlist={setWatchlist} pushButton={pushButton} setPushButton={setPushButton} />
          ))
        )}
      </div>
    </div>
  );
};


export default Home;