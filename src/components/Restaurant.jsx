import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../data/restaurants.json";

const Restaurant = () => {
  return (
    <div className="w-full bg-gray-100 py-6 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[30px] font-bold mb-4 text-[#02060C]">
          Discover best restaurants on Dineout
        </h2>

        {/* Scrollable Row */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;