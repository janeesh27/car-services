import React from "react";

const BookYourCar = () => {
  return (
    <>
      <div className="fixed">
        <div className="p-4 rounded-xl bg-slate-50 relative top-[15rem] left-[52rem] ">
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
        </div>
      </div>
    </>
  );
};

export default BookYourCar;
