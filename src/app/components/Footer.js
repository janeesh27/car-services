import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex space-x-8 bg-blue-950 text-[24px] mt-8 text-white p-8 justify-evenly text-left">
        <div className="text-left">
          <p>ABOUT US</p>
          <div className="flex flex-col pt-8 list-none">
            <ul>
              <li>FAQ</li>
              <li>Stores</li>
              <li>Dealers</li>
              <li>Privacy Policy</li>
              <li>Reviews</li>
              <li>Offers</li>
              <li>Directory</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div>
          <p>OUR SERVICES</p>
          <div className="flex flex-col pt-8 list-none">
            <ul>
              <li>Oil Change</li>
              <li>Brake Inspection</li>
              <li>Wheel Alignment</li>
              <li>Tire Rotation</li>
              <li>Transmission Service</li>
              <li>Engine Diagnostic</li>
              <li>Battery Replacement</li>
              <li>Air Conditioning Service</li>
              <li>Fluid Checks and Changes</li>
              <li>General Inspection</li>
            </ul>
          </div>
        </div>
        <div>
          <p>lUXURY BRANDS</p>
          <div className="flex flex-col pt-8 list-none">
            <ul>
              <li>Mercedes-Benz</li>
              <li>BMW</li>
              <li>Audi</li>
              <li>Toyota</li>
              <li>Honda</li>
              <li>Ford</li>
              <li>Chevrolet</li>
              <li>Lexus</li>
              <li>Nissan</li>
              <li>Hyundai</li>
            </ul>
          </div>
        </div>
        <div>
          <p>POPULAR BRANDS</p>
          <div className="flex flex-col pt-8 list-none">
            <ul>
              <li>Maruti Suzuki</li>
              <li>Hyundai</li>
              <li>Tata Motors</li>
              <li>Mahindra & Mahindra</li>
              <li>Kia Motors</li>
              <li>Honda</li>
              <li>Toyota</li>
              <li>Volkswagen</li>
              <li>Ford</li>
              <li>Renault</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
