import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { data:images, loading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
       {loading && <div className="sk-fading-circle">
  <div className="sk-circle1 sk-circle"></div>
  <div className="sk-circle2 sk-circle"></div>
  <div className="sk-circle3 sk-circle"></div>
  <div className="sk-circle4 sk-circle"></div>
  <div className="sk-circle5 sk-circle"></div>
  <div className="sk-circle6 sk-circle"></div>
  <div className="sk-circle7 sk-circle"></div>
  <div className="sk-circle8 sk-circle"></div>
  <div className="sk-circle9 sk-circle"></div>
  <div className="sk-circle10 sk-circle"></div>
  <div className="sk-circle11 sk-circle"></div>
  <div className="sk-circle12 sk-circle"></div>
</div> } 
      {/*Esto es una forma abreviada a poner: loading? <p>Loading</p> : null */}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> // ESTO REEMPLAZA A img={img} y envia en vez de props el img (se puede desestructurar despues)
        ))}
      </div>
    </>
  );
};
