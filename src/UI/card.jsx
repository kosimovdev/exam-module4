import React from "react";
import arrow from "../assets/icons/arrow.svg";
import "./style.scss";
import { Link } from "react-router-dom";

const card = ({ state: { image, title, price, oldPrice }, singleId , styleText }) => {
  return (
    <div className="card min-w-[260px] mb-10 h-[366px] hover:shadow-lg hover:rounded-md duration-200 relative">
      <div className="cardImg">
        <img className="object-contain w-full" src={image} alt="img" />
      </div>
      <Link
        to={`/plants/${singleId}`}
        className="hidden absolute bg-[#595CFF] w-[46px] h-[46px] hoverImg rounded-full p-3 right-6 top-[240px]"
      >
        <img src={arrow} alt="img" />
      </Link>
      <Link to={`/plants/${singleId}`}>
        <div className="box flex flex-col">
          <h1
            style={styleText}
            className="text-[18px] leading-[22px] text-center mt-5 mb-2"
          >
            {title}
          </h1>
          <div style={styleText} className="flex justify-center">
            <p  className="text-[14px] leading-4 text-center">
              {price}$
            </p>
            {oldPrice && (
              <p
                
                className="text-[14px] leading-4 text-center ml-4 text-[#82828B] line-through"
              >
                {oldPrice}$
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default card;
