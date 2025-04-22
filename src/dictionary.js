import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>
        {" "}
        <span className="magnify">🔎</span> Dictionary
      </h1>
      <form>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" value="Search" onClick={search} />
      </form>
    </div>
  );
}
