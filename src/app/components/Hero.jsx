import React from "react";

const Hero = () => {
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
            <div className="text-white font-bold flex my-auto">Login</div>
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
    </>
  );
};

export default Hero;
