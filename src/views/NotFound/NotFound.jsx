import React from "react";
import css from './NotFound.module.css';


const NotFound = () => (
    <div >
    <img className={css.image} src='/src/components/Images/vecteezy_404-landing-page_6549647.jpg' alt=''/>
    <h2 className={css.title}> The page is not found </h2>
    </div>
);
  
  export default NotFound;