import React from "react";
import { useSelector } from "react-redux";
import PorductCard from "../../Pages/ProductCard";

const Menu = () => {
  const { product } = useSelector((s) => s);
  return (
    <div id="menu">
      <div className="container">
        <h1 className="text-center text-black-900 text-5xl mt-3 ">Menu</h1>
        <div className="menu flex items-center justify-center flex-wrap gap-10 mt-10 ">
          {product.map((el) => (
            <PorductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
