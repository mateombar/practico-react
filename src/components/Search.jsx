import React from "react";
import "../assets/styles/components/Search.scss";

const Search = () => {
  let text_main_title = "¿What do you wanna see today?";
  let text_main_input_placeholder = "Search...";
  return (
    <section className="main">
      <h2 className="main__title">{text_main_title}</h2>
      <input type="text" className="input" placeholder={text_main_input_placeholder} />
    </section>
  );
};

export default Search;
