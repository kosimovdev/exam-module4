import { useState } from "react";
import data from "../../server/data";
import Card from "../../UI/card";

const Index = () => {
  const { revelantFlowers } = data;

 const [counter, setCounter] = useState(0);
 const wrapperStyle = {
   transform: `translateX(-${counter * 280}px)`,
 };
 const nextSlide = () => {
   setCounter((nextCounter) =>
     nextCounter === revelantFlowers.length - 1 ? 0 : nextCounter + 1
   );
   if (counter == 4) {
     setCounter(0);
     wrapper.classList.add(`translate-x-[2240px]`);
   }
 };

 const prevSlide = () => {
   setCounter((prevCounter) =>
     prevCounter === revelantFlowers.length - 1 ? 0 : prevCounter - 1
   );
 };




  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between items-center ">
        <h1 className="mt-[50px] mb-[44px] text-[24px] leading-7">Revelant</h1>
        <div className="flex items-center gap-5">
          <svg
            onClick={() => prevSlide()}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.85981 8.11673C7.6729 7.96109 7.36985 7.96109 7.18293 8.11673L2.14019 12.3158L2.084 12.3719C1.95329 12.53 1.97541 12.7488 2.14834 12.8861L7.19108 16.8899L7.25866 16.9347C7.44823 17.0386 7.70562 17.0181 7.86777 16.8765L7.92156 16.8202C8.04631 16.6624 8.02172 16.448 7.85166 16.313L3.67891 13H22.5238L22.6094 12.9919C22.8315 12.9496 23 12.7455 23 12.5C23 12.2239 22.7868 12 22.5238 12H3.87229L7.85981 8.68037L7.91519 8.62517C8.04442 8.46984 8.02596 8.25508 7.85981 8.11673Z"
              fill={counter > 0 ? "black" : "#E6E6EB"}
            />
          </svg>
          <svg
            onClick={() => nextSlide()}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1402 8.11673C16.3271 7.96109 16.6302 7.96109 16.8171 8.11673L21.8598 12.3158L21.916 12.3719C22.0467 12.53 22.0246 12.7488 21.8517 12.8861L16.8089 16.8899L16.7413 16.9347C16.5518 17.0386 16.2944 17.0181 16.1322 16.8765L16.0784 16.8202C15.9537 16.6624 15.9783 16.448 16.1483 16.313L20.3211 13H1.97619L1.89059 12.9919C1.66845 12.9496 1.5 12.7455 1.5 12.5C1.5 12.2239 1.7132 12 1.97619 12H20.1277L16.1402 8.68037L16.0848 8.62517C15.9556 8.46984 15.974 8.25508 16.1402 8.11673Z"
              fill={counter > 6 ? "#E6E6EB" : "black"}
            />
          </svg>
        </div>
      </div>
      <div
        style={wrapperStyle}
        className="carousel_wrapper2 flex justify-between gap-5 transform duration-500"
      >
        {revelantFlowers.map((flowers, index) => {
          return <Card state={flowers} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Index;
