import React from 'react';
import style from './recipes.module.css';
const Recipes=({title,description,image,ingredients})=>{
  return(
    <div className={style.recipes}>
    <h1 className={style.title}>{title}</h1>
    <img className={style.image} src={image} alt=""/>
    <p className={style.incd}>Calories={description}</p>
    <ol className={style.incd}>
      {ingredients.map(incd=>(
      <li>{incd.text}</li>))}
      </ol>
   
    </div>
  );
};
export default Recipes;