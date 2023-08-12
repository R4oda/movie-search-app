import React, { useState } from "react";

// App.js内のsearch関数がSearchコンポーネントに渡ってくる。
const Search = (props) => {
    // 初期値は空の文字列。このステートは、ユーザーが検索キーワードを入力するための入力フィールドの値を管理します。
    const [searchValue, setSearchValue] = useState("");

    // 入力フィールドの値が変更されるたびに呼び出される関数
    const handleSearchInputChanges = (e) => {
        // onChangeイベントが設定されている入力欄が変更されるたびに、入力欄の情報がステートによって保持される
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        // フォームが送信された際にページが再読み込みされるのを防ぎ、
        // 代わりにカスタムの検索処理を実行するために使用されています。
        // このようにして、ページがリロードされずにカスタムの検索処理が行われるようになります
        e.preventDefault();
        // 親コンポーネントにステートの値を渡してsearch関数を実行
        props.search(searchValue);
        // ステートの値を空にする
        // 検索ボタンがクリックされた後に、検索キーワードを入力したフィールドをリセットするためです。
        resetInputField();
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default Search;