"use client";
import React from "react";
import { useState } from "react";
const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        className="h-[60vh] bg-cover "
        style={{
          backgroundImage: `url('homepage/hero.jpg')`,
        }}
      >
        <div className="flex">
          <div className="flex space-x-4 pt-8 pl-[2rem]">
            <img src="homepage/logo.png"></img>
            <div className="flex my-auto">
              <img src="homepage/logotext.png" className="h-8"></img>
            </div>

            <div className="text-white font-bold flex my-auto">LOCATION</div>
          </div>
          <div className="flex space-x-4 pt-8 pr-4 justify-end w-full ">
            <div className="text-white font-bold flex my-auto">Spares</div>
            <div className="text-white font-bold flex my-auto">Blog</div>
            <div className="text-white font-bold flex my-auto">More</div>
            <div
              onClick={handleNav}
              className="text-white font-bold flex my-auto"
            >
              Login
            </div>
          </div>
        </div>
        <div className="pt-16 pl-[2rem]">
          <div className="text-white text-[2.5rem] font-bold">
            Experience The Best Car Services In Hyedrabad
          </div>
          <div className="text-white text-[1.75rem] pt-4">
            We provide Our Services in over 100+ Major Cities also.
          </div>
          <div className="text-white text-[1.25rem] pt-20 flex w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            egestas ligula. Nulla facilisi. Phasellus faucibus ligula id mauris
            varius, eget faucibus lorem fringilla. Vivamus ut felis porta,
            luctus libero eget, feugiat velit. Sed aliquet leo et ex sodales,
          </div>
        </div>
        <div className="pt-12 pl-[2rem]">
          <img src="homepage/rating.png"></img>
        </div>
      </div>
      <div
        className={
          nav ? " fixed right-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full align-middle">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-2 font-bold cursor-pointer"
              >
                &larr;
              </div>
            </div>
            <div className="flex flex-col space-y-4 mt-[150px]">
              <img
                src="homepage/login.png"
                className="w-[500px] height-[400px]"
              ></img>
              <div className="text-center text-[34px] text-blue-600 font-bold">
                Login
              </div>
              <input
                placeholder="+91 | Mobile Number "
                className=" text-[28px] p-4 rounded-lg text-left border-[2px] border-blue-600"
              ></input>
              <div className="text-white bg-blue-600 mt-4 p-6 text-center text-[24px] font-semibold w-[460px] rounded-md hie">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
