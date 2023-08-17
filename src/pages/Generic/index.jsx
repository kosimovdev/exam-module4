import React from "react";
import { useLocation } from "react-router-dom";
const index = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bg-violet-400 h-[500px]">
      <h1 className="text-center text-3xl mt-5">{pathname.slice(1)}</h1>
    </div>
  );
};

export default index;
