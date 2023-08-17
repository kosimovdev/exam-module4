import React, { useState } from "react";
import { Breadcrumb, Button, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import dropArrow from "../../assets/icons/Icon.svg";
import data from "../../server/data";
import Card from "../../UI/card";

const Index = () => {
  const { AllPlants } = data;
  const [toggle, setToggle] = useState(false);
  const styleText = {
    textAlign: "left",
    justifyContent: "start",
    paddingLeft: "10px",
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: <NavLink to="/home">Home</NavLink>,
          },
          {
            title: "All flowers",
          },
        ]}
      />
      <h1 className="text-[32px]  mt-5 mb-10 ">All Plants</h1>
      <div className="wrapper">
        <div className="dropdown pb-4 flex justify-between items-center">
          <div className="flex items-center gap-20">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="flex items-center border-0 shadow-none">
                Sort by <img className="ml-[14px]" src={dropArrow} alt="img" />
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="flex items-center border-0 shadow-none">
                Color <img className="ml-[14px]" src={dropArrow} alt="img" />
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="flex items-center border-0 shadow-none">
                Price <img className="ml-[14px]" src={dropArrow} alt="img" />
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="flex items-center border-0 shadow-none">
                Flower type
                <img className="ml-[14px]" src={dropArrow} alt="img" />
              </Button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="flex items-center border-0 shadow-none">
                Occasion <img className="ml-[14px]" src={dropArrow} alt="img" />
              </Button>
            </Dropdown>
          </div>
          <div>
            <p className="text-right">{AllPlants.length} items</p>
          </div>
        </div>
        <div className="line w-full h-[1px] border-t-[1px] border-[#E6E6EB] pb-10"></div>
      </div>
      <div className="allPlantsCard flex justify-between flex-wrap">
        {toggle
          ? AllPlants.map((flowers, index) => {
              return <Card singleId={flowers.id} state={flowers} key={index} />;
            })
          : AllPlants.slice(0, 8).map((flowers, index) => {
              return (
                <Card
                  styleText={styleText}
                  singleId={flowers.id}
                  state={flowers}
                  key={index}
                />
              );
            })}
      </div>
      <div className="grid place-content-center pb-[100px] mt-10">
        <button
          onClick={() => setToggle(!toggle)}
          className="w-[243px] h-[46px] grid place-content-center py-[15px] px-4 bg-[#000000] text-white"
        >
          {toggle ? "hide" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default Index;
