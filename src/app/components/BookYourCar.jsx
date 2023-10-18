import React from "react";

const BookYourCar = () => {
  return (
    <>
      <div className="absolute">
        <div className="p-4 rounded-xl bg-slate-50 fixed top-[15rem] right-[1rem] w-[350px] ">
          <div className="text-[32px] font-600 text-black text-left">
            Book your Car
          </div>
          <div className="text-[32px] font-600 text-black text-left">
            Service Now !
          </div>
          <div className="text-[18px] font-500 text-black text-left mt-4">
            Get instant quotes for your car service
          </div>
          <div className="flex space-x-4 pt-4">
            <div className="text-[#FBBC04] text-[20px]">Rating</div>
            <img src="homepage/star.png" className="h-[25px] w-[25px] "></img>
            <div className="text-[#FBBC04] text-[20px]"> 4.7/5</div>
          </div>
          <input
            className="border-[2px] border-blue-950 text-[16px] p-2 mt-4 rounded-md w-full text-left"
            placeholder="Enter your Mobile Number"
          ></input>
          <div className="bg-blue-950 text-[16px] p-2 text-white text-center rounded-lg mb-8 mt-4">
            Check For Free
          </div>
        </div>
      </div>
    </>
  );
};

export default BookYourCar;
