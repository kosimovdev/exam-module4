import React from "react";
import { Carousel } from "antd";
import arrow from "../../assets/icons/arrow.svg";
import NewCards from '../NewCards'
import Revelant from '../Revelant'

import "./style.scss";

const HomeFlowers = () => {
  return (
    <section>
      <>
        <div className="wrapper">
          <Carousel autoplay>
            <div className="h-[482px] bgIntro">
              <h1 className="text-[28px] leading-[28px] font-[Roboto-medium] mb-[20px] mt-[200px]">
                Title
              </h1>
              <p className="text-[18px] leading-[22px] mb-10">Description</p>
              <button className="py-4 px-[18px] h-[50px] flex items-center bg-[#595CFF] hover:bg-[#8788ea] text-white rounded-lg">
                Button <img className="ml-3  " src={arrow} alt="img" />{" "}
              </button>
            </div>
            <div className="h-[482px] bgIntro">
              <h1 className="text-[28px] leading-[28px] font-[Roboto-medium] mb-[20px] mt-[200px]">
                Title
              </h1>
              <p className="text-[18px] leading-[22px] mb-10">Description</p>
              <button className="py-4 px-[18px] h-[50px] flex items-center bg-[#595CFF] hover:bg-[#8788ea] text-white rounded-lg">
                Button <img className="ml-3  " src={arrow} alt="img" />{" "}
              </button>
            </div>
            <div className="h-[482px] bgIntro">
              <h1 className="text-[28px] leading-[28px] font-[Roboto-medium] mb-[20px] mt-[200px]">
                Title
              </h1>
              <p className="text-[18px] leading-[22px] mb-10">Description</p>
              <button className="py-4 px-[18px] h-[50px] flex items-center bg-[#595CFF] hover:bg-[#8788ea] text-white rounded-lg">
                Button <img className="ml-3  " src={arrow} alt="img" />{" "}
              </button>
            </div>
          </Carousel>
        </div>
        <NewCards/>
        <Revelant/>
      </>
    </section>
  );
};

export default HomeFlowers;
