import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGif } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    getGif(category).then(imgs =>setImages(imgs)); // esto es lo mismo que .then(setImages) porque se le pasa el imgs como argumento

  }, [category]); // useEffect hace que lo de adentro solo se renderice una vez al cargar el documento (si esta el array vacio) sino cada vez que cambia la dependencia (en este caso category)



  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> // ESTO REEMPLAZA A img={img} y envia en vez de props el img (se puede desestructurar despues)
        ))}
      </div>
    </>
  );
};
