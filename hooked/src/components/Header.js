import React from "react";

//App.js内のAppコンポーネントのreturn文（実際のUIを構築している部分）の
//<Header text="映画検索アプリ" /> のtext部分がpropsとして渡ってきている。
const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;