import React from "react";
import MainBanner from "./MainBanner";
import Products from "./Products";
import { data, data2 } from "../../data";
import Cards from "./Card";
export default function Main() {
  return (
    <div className="main">
      <div className="mainBanner">
        <MainBanner />
      </div>

      <div className="cards">
        {data2.map((d, index) => (
          <Cards key={index} img={d.img} title={d.title} />
        ))}
      </div>

      <div className="main__products">
        <h1 className="main__products__title">Our Services</h1>
        {data.map((d, index) => (
          <Products
            key={index}
            num={index + 1}
            img={d.img}
            title={d.title}
            head={d.head}
          />
        ))}
      </div>
    </div>
  );
}
