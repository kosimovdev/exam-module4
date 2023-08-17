import React from "react";
import { Carousel } from "antd";
import arrow from "../../assets/icons/arrow.svg";
import blackArrow from "../../assets/icons/black-arrow.svg";

import "./style.scss";

const Intro = () => {
  return (
    <section>
      <>
        <div className="wrapper">
          <Carousel autoplay>
            <div className="h-[220px] bgIntro">
              <h1 className="text-[28px] leading-[28px] font-[Roboto-medium] mb-[10px]">
                40% OFF
              </h1>
              <p className="text-[18px] leading-[22px] mb-6">
                Best deals this week. Fresh flowers, plants and gifts
              </p>
              <button className="py-4 px-[18px] h-[50px] flex items-center bg-[#000000] text-white rounded-lg">
                Shop now <img className="ml-3  " src={arrow} alt="img" />{" "}
              </button>
            </div>
            <div className="h-[220px] bgIntro">
              <h1 className="text-[28px] leading-[28px] font-[Roboto-medium] mb-[10px]">
                40% OFF
              </h1>
              <p className="text-[18px] leading-[22px] mb-6">
                Best deals this week. Fresh flowers, plants and gifts
              </p>
              <button className="py-4 px-[18px] h-[50px] flex items-center bg-[#000000] text-white rounded-lg">
                Shop now <img className="ml-3  " src={arrow} alt="img" />{" "}
              </button>
            </div>
            <div className="h-[220px] bgIntro">
              <h1 className="text-[28px] leading-[28px] font-[Roboto-medium] mb-[10px]">
                40% OFF
              </h1>
              <p className="text-[18px] leading-[22px] mb-6">
                Best deals this week. Fresh flowers, plants and gifts
              </p>
              <button className="py-4 px-[18px] h-[50px] flex items-center bg-[#000000] text-white rounded-lg">
                Shop now <img className="ml-3  " src={arrow} alt="img" />{" "}
              </button>
            </div>
          </Carousel>
          <div className="flex justify-between items-center gap-10 mt-10">
            <div className="intro-box w-[560px] h-[221px] py-[46px] px-[80px] rounded">
              <h1 className="text-[28px] leading-7 mb-[10px] font-[Roboto-medium]">
                Nice little gifts
              </h1>
              <p className="text-[18px] leading-6 mb-6">for loved ones</p>
              <a className="flex items-center" href="#">
                View now <img className="ml-3" src={blackArrow} alt="arrow" />
              </a>
            </div>
            <div className="intro-box w-[560px] h-[221px] py-[46px] px-[80px] rounded">
              <h1 className="text-[28px] leading-7 mb-[10px] font-[Roboto-medium]">
                Plants
              </h1>
              <p className="text-[18px] leading-6 mb-6">for home comfort</p>
              <a className="flex items-center" href="#">
                View now <img className="ml-3" src={blackArrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Intro;
