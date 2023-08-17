import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

const NavbarLink = () => {
  return (
    <div className="container">
      <ul className="flex justify-center gap-[67px] py-[27px]">
        <li>
          <NavLink className="font-[Regular] hoverLink" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="font-[Regular] hoverLink" to="/flowers">
            Flowers
          </NavLink>
        </li>
        <li>
          <NavLink className="font-[Regular] hoverLink" to="/plants">
            Plants
          </NavLink>
        </li>
        <li>
          <NavLink className="font-[Regular] hoverLink" to="/gifts">
            Gifts
          </NavLink>
        </li>
        <li>
          <NavLink className="font-[Regular] hoverLink" to="/discounts">
            Discounts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLink;