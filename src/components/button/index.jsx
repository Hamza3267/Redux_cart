import React from "react";
import style from './buton.module.scss'
const Button = (btnClass, btndiv, onClick,name) => {
  return (
    <div className={`${style.buttonedits} ${btndiv}`}>
      <button
        className={`${style.btn} ${btnClass}`}
        onClick={onClick}
       
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
