import React from "react";
import '../assets/styles/components/Categories.scss';
const Categories = ({children, title, titulito}) => (
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    <h2 className="categories__title2">El segundo titulo a ver que pasa:{titulito}</h2>
    {children}
  </div>
);

export default Categories;
