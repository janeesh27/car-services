"use client";
import React, { useState } from "react";

const Navigator = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const items = [
    {
      name: "Our Service",
      id: "ourservice",
    },
    {
      name: "Curated Custom Service",
      id: "ccs",
    },
    {
      name: "How Car Service Works?",
      id: "hcs",
    },
    {
      name: "Rating & Reviews",
      id: "rating",
    },
    {
      name: "Price List",
      id: "ourservice",
    },
    {
      name: "Frequently Asked Questions",
      id: "ourservice",
    },
    // "Our Service",
    // "Curated Custom Service",
    // "How Car Service Works?",
    // "Rating & Reviews",
    // "Price List",
    // "Frequently Asked Questions",
  ];

  return (
    <>
      <div className="grid grid-cols-[7fr_3fr]  my-8 ml-[2rem] ">
        <div
          className="text-[20px] flex space-x-4 whitespace-nowrap overflow-x-auto shadow-xl p-4 rounded-xl"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "auto",
          }}
        >
          {items.map((item, index) => (
            <a
              href={`#${item?.id}`}
              key={index}
              onClick={() => handleItemClick(index)}
              className={`${
                selectedItem === index ? "font-bold underline" : ""
              } cursor-pointer`}
            >
              {item?.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigator;
