import React from "react";
import location from "../../assets/icons/location.svg";
import cart from '../../assets/icons/cart.svg'

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper flex justify-between items-center pt-[16px] pb-[11px]">
        <a href="#" className="text-[16px] leading-[17px] flex">
          <img className="mr-[7px]" src={location} alt="location" />
          Tashkent
        </a>
        <div className="flex items-center gap-[20px]">
          <i className="bx bx-search-alt-2 text-[24px]"></i>
          <img src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
