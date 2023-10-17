import React from "react";

const Customerservice = () => {
  return (
    <div className="ml-2 mt-16">
      <div className="text-[1.25rem] text-[#001B39] font-[700] text-left ml-8">
        Curated Custom Services
      </div>
      <div className="grid grid-cols-5 pt-8 w-[70%] ">
        <div className="flex justify-center">
          <img src="homepage/cs1.png"></img>
        </div>
        <div className="flex justify-center">
          <img src="homepage/cs2.png"></img>
        </div>
        <div className="flex justify-center">
          <img src="homepage/cs3.png"></img>
        </div>
        <div className="flex justify-center">
          <img src="homepage/cs4.png"></img>
        </div>
        <div className=" justify-center">
          <img src="homepage/cs5.png"></img>
        </div>
      </div>
      <div className="text-[1.25rem] text-[#001B39] font-[700] text-left ml-8 pt-16">
        Choose a workshop near you
      </div>
      <div className="grid grid-cols-[5fr_4fr]">
        <div
          className="mt-8 ml-[3rem] flex space-x-4 px-4 overflow-x-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "auto",
          }}
        >
          <img src="homepage/ws1.png" className="w-[250px] h-[250px]"></img>

          <img src="homepage/ws2.png" className="w-[250px] h-[250px]"></img>
          <img src="homepage/ws3.png" className="w-[250px] h-[250px]"></img>

          <img src="homepage/ws4.png" className="w-[250px] h-[250px]"></img>
        </div>
      </div>
      <div className="text-[1.25rem] text-[#001B39] font-[700] text-left ml-8 pt-16">
        How Car Service Works?
      </div>
      <div className="mt-8 ml-[3rem] flex space-x-16 w-[60%]">
        <div>
          <img src="homepage/cars1.png" className="w-[175px] h-[175px]"></img>
          <div className="text-[1.25rem] text-[#001B39] font-[600] text-center">
            Free Pickup Drop
          </div>
        </div>
        <div>
          <img src="homepage/cars2.png" className="w-[175px] h-[175px]"></img>
          <div className="text-[1.25rem] text-[#001B39] font-[600] text-center">
            Genuine Parts
          </div>
        </div>
      </div>
      <div className="mt-8 ml-[3rem] flex space-x-16 w-[60%]">
        <div>
          <img
            src="homepage/cars.3png.png"
            className="w-[175px] h-[175px]"
          ></img>
          <div className="text-[1.25rem] text-[#001B39] font-[600] text-center">
            30 Days Warranty
          </div>
        </div>
        <div>
          <img src="homepage/cars4.png" className="w-[175px] h-[175px]"></img>
          <div className="text-[1.25rem] text-[#001B39] font-[600] text-center">
            Affordable Parts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerservice;
