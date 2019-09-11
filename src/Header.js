import React from 'react';
import style from './header.module.css';
const Header=()=>{
  return(
    <div className={style.header}>
   <h1>HOG-IN</h1>
   <ul className={style.x}>
     <li>about</li>
     <li>tops</li>
     <li>login</li>
     </ul>
  
    </div>
  );
};
export default Header;