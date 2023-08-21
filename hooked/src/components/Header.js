import React from "react";
import { Link } from "react-router-dom";

//App.js内のAppコンポーネントのreturn文（実際のUIを構築している部分）の
//<Header text="映画検索アプリ" /> のtext部分がpropsとして渡ってきている。
const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
      <nav>
        <ul className="App-header-nav">
        <li><Link to="/movie-search-app/">{props.home}</Link></li>
          <li><Link to="/movie-search-app/watchlist">{props.watchlist}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;