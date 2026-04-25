import React from "react";

const categoriesData = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Desserts",
  "Biryani",
  "Burger",
  "Pizza",
  "Noodles",
  "Khichdi",
  "Salad",
  "Coffee",
  "Pav Bhaji",
  "Paratha",
  "Shawarma",
  "Dosa",
  "Rolls",
  "Pasta",
  "Cake",
  "Ice Cream",
  "Paratha",
];

function Categories() {
  return (
    <section className="w-full bg-[#f2f2f2] py-8">
      {/* same alignment as header */}
      <div className="max-w-[1200px] mx-auto">

        {/* Heading + arrows */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[40px] font-bold text-[#02060C]">
            Order our best food options
          </h2>

          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full bg-[#E2E2E7] flex items-center justify-center text-[22px]">
              ←
            </button>

            <button className="w-11 h-11 rounded-full bg-[#D9D9DE] flex items-center justify-center text-[22px]">
              →
            </button>
          </div>
        </div>

        {/* horizontal scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-8 min-w-max pb-4">

            {categoriesData.map((item, index) => (
              <div
                key={index}
                className="min-w-[150px] flex justify-center items-center cursor-pointer"
              >
                <img
                  src={`/images/${item}.avif`}
                  alt={item}
                  className="w-[144px] h-[180px] object-contain hover:scale-105 transition duration-300"
                />
              </div>
            ))}

          </div>
        </div>

        {/* divider */}
        <div className="border-b border-gray-300 mt-8"></div>
      </div>
    </section>
  );
}

export default Categories;