import React from "react";
import style from "./header.module.scss";
import logo from "../../assests/Pics/Logo.png";
import Cart from "../../assests/Svg/cart"
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className={style.mainhead}>
      <img src={logo} alt="Logo" className={style.logoimg} />
        <div className={style.headernames}>
          <div  onClick={handleHome}>home</div>
          <div>category</div>
          <div>About</div>
          <div>Support</div>
        </div>
        <div>
           <Cart />
        </div>
      </div>
    </>
  );
};

export default Header;
