import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

    
    const [categories, setCategories] = useState(['One punch'])

    // const handleAdd = ()=>{
    //     //setCategories( categories.push('Boku no hero')) ESTO REVIENTA TODO
        
    //     // Alternativa 1
    //     //setCategories([...categories, 'Boku no hero'])
    //     //setCategories(['Boku no hero', ...categories]) Alternativa 

    //     //Alternativa con callbakcs
    //     setCategories(cat=>[...cat, 'Boku no hero'])// sirve para utilizar en otro componente exportando solo el setCategorias
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

                <ul>
                    {categories.map(c=>(
                    <GifGrid 
                    key={c}
                    category={c}/>
                    )
                    )}
                </ul>
            
        </>
    );
}

export default GifExpertApp;