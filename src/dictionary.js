import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {}

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
