import React, { useState, useEffect } from "react";
import "../assets/styles/App.scss";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
import Footer from "../components/Footer";

import useInitialState from "../hooks/useInitialState";

// useState permite manejar estado
// useEffect permite hacer transmisiones, es decir peticiones de algun evento que se tenga que transmitir entre componentes o escuchas cambios
const API = "http://localhost:3000/initialState";
const App = () => {
  const [videos, categories] = useInitialState(API);
  return (
    <div className="app">
      <Header />
      <Search />
      {categories.map(
        (category) =>
          videos[category].length > 0 && (
            <Categories key={category} title={category.toUpperCase()}  titulito={category.toUpperCase()}>
              <Carrousel>
                {videos[category].map((item) => (
                  <CarrouselItem key={item.id} {...item} />
                ))}
              </Carrousel>
            </Categories>
          )
      )}
      {/* {initialState.mylist.length > 0 && (
        <Categories title="My list">
          <Carrousel>
            {initialState.mylist.map((i) => (
              <CarrouselItem key={i.id} {...i} />
            ))}
          </Carrousel>
        </Categories>
      )}
      <Categories title="Trending">
        <Carrousel>
          {initialState.trends.map((i) => (
            <CarrouselItem key={i.id} {...i} />
          ))}
        </Carrousel>
      </Categories>
      <Categories title="Originals">
        <Carrousel>
          {initialState.originals.map((i) => (
            <CarrouselItem key={i.id} {...i} />
          ))}
        </Carrousel>
      </Categories> */}

      <Footer />
    </div>
  );
};
export default App;
