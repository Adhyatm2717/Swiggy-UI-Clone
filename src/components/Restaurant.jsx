import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../data/restaurants.json";

const Restaurant = () => {
  return (
    <div className="px-6 py-6 bg-gray-100 min-h-screen">

      <h2 className="text-xl font-bold mb-4">
        Discover best restaurants on Dineout
      </h2>

      {/* Scrollable Row */}
      <div className="flex gap-4 overflow-x-auto pb-4">

        {restaurants.map((item) => (
          <RestaurantCard key={item.id} {...item} />
        ))}

      </div>
    </div>
  );
};

export default Restaurant;