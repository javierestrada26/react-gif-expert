import { useState } from 'react'
import { AddCategory,GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer','HunterxHunter'])
    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return
       /* const categori = useState().push('Valorant')
        setCategories(categori)*/

        /*primero, ver en consola el objeto que quiero agregar*/
       // console.log('Valorant');
        /**se agrega por medio del setcategories, no usar push*/
        /**Hago un llamado(con los tres puntos) a las categoria que ya tengo y agrego la deseada */
       // setCategories(['Valorant',...categories]) /**Forma 1  */
        setCategories([newCategory,...categories])
        /**Segunda forma, desestucturo categorias y lo añado */
        //setCategories(cat =>[...cat,'Valorant'])
    }
  return (
    <>
    {/**Titulo de la aplicacion  */}
        <h1>GifExpertApp</h1>

    {/**Input */}

    <AddCategory 
    //setCategories={setCategories}
        onNewCategory={(value)=>onAddCategory(value)}
    />

    {/**Listado de gifs */}

    {/*<button onClick={onAddCategory}>Agregar</button>*/}
    
        {categories.map(category =>
            <GifGrid key={category} category={category}/> 
        )}
        
    
        {/**Gif Item */}
    </>
  )
}
