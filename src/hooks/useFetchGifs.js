import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{
    const [state, setstate] = useState({
        data: [],
        loading: true,
    })
    useEffect(() => { // Los efectos no pueden ser async porque esperan un evento sincrono
        
        setTimeout(()=>{
            getGifs(category)
                .then(imgs=>{
                    setstate({
                        data: imgs,
                        loading: false
                    })
                })
          
         }, 2000)
    
      }, [category]);


    return state; // El state es un objeto==> {data: [], loading: true,}
}