import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Breadcrumb, Collapse } from "antd";
import freeimg from "../../assets/icons/free.svg";
import benefit from "../../assets/icons/benefit.svg";
import photo from "../../assets/icons/photo.svg";
import Revelant from '../Revelant'

import data from "../../server/data";
import decr from "../../assets/icons/decr.svg";
import incr from "../../assets/icons/incr.svg";

const SinglePlant = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const { AllPlants } = data;
  const singlePlant = AllPlants.find((val) => val.id === +id);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  };

  const text = `This is Accordion`;
  const items = [
    {
      key: "1",
      label: "Bouquet contents",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Details",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Delivery & Pay policy",
      children: <p>{text}</p>,
    },
  ];

  return (
    <div className="pb-[160px]">
      <Breadcrumb
        items={[
          {
            title: <NavLink to="/home">Home</NavLink>,
          },
          {
            title: <NavLink to="/plants">All Flowers </NavLink>,
          },
          {
            title: "An Application",
          },
        ]}
      />
      <div className="wrapper pt-[42px] flex justify-between items-start pb-5">
        <div className="boxLeft">
          <img
            className="w-[568px] h-[568px]"
            src={singlePlant?.image}
            alt=""
          />
          <div className="flex items-center gap-10 mt-5">
            <img src={freeimg} alt="img" />
            <img src={benefit} alt="img" />
            <img src={photo} alt="img" />
          </div>
        </div>
        <div className="boxRight w-[518px]">
          <h1 className="text-[26px] leading-7 mb-5">{singlePlant?.title}</h1>
          <div className="flex">
            <h4 className="text-[28px] leading-7 mb-[15px]">
              {singlePlant?.price
                ? singlePlant?.price * count
                : count === 0 || singlePlant.price}
              $
            </h4>
            {singlePlant?.oldPrice && (
              <p className="text-[18px] leading-[22px] pt-[6px] text-center ml-5 text-[#82828B] line-through">
                {singlePlant?.oldPrice}$
              </p>
            )}
          </div>
          <div className="line w-full h-[1px] border-t-[1px] border-[#E6E6EB]"></div>
          <p className="text-[16px] mt-10">Count:</p>
          <div className="flex items-center gap-[20px] mt-7">
            <button
              onClick={increment}
              className="p-[7px] bg-[#F0F0F5] rounded-[100%] text-[24px]"
            >
              <img src={incr} alt="img" />
            </button>
            <p>{count}</p>
            <button
              onClick={decrement}
              className="p-[7px] bg-[#F0F0F5] rounded-[100%] text-[24px]"
            >
              <img src={decr} alt="img" />
            </button>
          </div>
          <div className="colorPicker mt-10">
            <p className="text-[16px] leading-6">Color:</p>
            <div className="flex gap-5 items-center mt-5">
              <button className="w-[36px] h-[36px] rounded-full bg-[#F0F0F5] focus:ring-[#595CFF] focus:ring-2"></button>
              <button className="w-[36px] h-[36px] rounded-full bg-[#EE7764] focus:ring-[#595CFF] focus:ring-2"></button>
              <button className="w-[36px] h-[36px] rounded-full bg-[#FFBC2C] focus:ring-[#595CFF] focus:ring-2"></button>
            </div>
            <div className="flex gap-5 mt-[54px]">
              <button className="w-[309px] h-[56px] bg-[#595CFF] rounded-md text-white hover:bg-[#5c5fffd5]">
                Button
              </button>
              <button className="border-[1px] border-[#E6E6EB] p-[16px] rounded-md hover:bg-[#595CFF] hover:text-white duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.68638 4.14285L5.35476 2.78357C5.09658 1.73512 4.17153 0.999938 3.11054 1H2V2.57142H3.11054C3.47355 2.56065 3.79474 2.80935 3.88175 3.16856L6.62725 14.5457L6.9126 15.7164C7.17282 16.7734 8.11035 17.5109 9.17995 17.4999H19.7378V15.9285H9.17995C8.81694 15.9393 8.49574 15.6906 8.40874 15.3314L8.3162 14.9385L19.7378 12.1964C20.5822 11.9964 21.246 11.3322 21.4576 10.4757L23 4.14285H5.68638ZM19.9923 10.0985C19.9209 10.3855 19.6973 10.6072 19.4139 10.6721L7.96144 13.4142L6.07198 5.71427H21.0643L19.9923 10.0985ZM5.85604 20.6428C5.85604 19.341 6.89189 18.2857 8.16967 18.2857C9.44745 18.2857 10.4833 19.341 10.4833 20.6428C10.4833 21.9446 9.44745 22.9999 8.16967 22.9999C6.89189 22.9999 5.85604 21.9446 5.85604 20.6428ZM7.39846 20.6428C7.39846 21.0767 7.74374 21.4285 8.16967 21.4285C8.59559 21.4285 8.94087 21.0767 8.94087 20.6428C8.94087 20.2089 8.59559 19.8571 8.16967 19.8571C7.74374 19.8571 7.39846 20.2089 7.39846 20.6428ZM15.2867 19.7408C15.6448 18.86 16.4884 18.2857 17.4242 18.2857C18.7019 18.2857 19.7378 19.341 19.7378 20.6428C19.7378 21.5962 19.1741 22.4557 18.3096 22.8205C17.445 23.1853 16.4499 22.9837 15.7882 22.3095C15.1265 21.6354 14.9285 20.6216 15.2867 19.7408ZM16.653 20.6428C16.653 21.0767 16.9982 21.4285 17.4242 21.4285C17.8501 21.4285 18.1954 21.0767 18.1954 20.6428C18.1954 20.2089 17.8501 19.8571 17.4242 19.8571C16.9982 19.8571 16.653 20.2089 16.653 20.6428Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="accordion mt-[59px]">
            <Collapse
              expandIconPosition={"end"}
              ghost
              bordered={false}
              accordion
              items={items}
            />
          </div>
        </div>
      </div>
      <div className="cardWrapper mt-[80px]">
        <Revelant/>
      </div>
    </div>
  );
};

export default SinglePlant;
