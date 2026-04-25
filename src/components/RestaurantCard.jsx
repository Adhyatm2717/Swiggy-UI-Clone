import React from "react";

const RestaurantCard = ({
  image,
  name,
  rating,
  cuisines,
  location,
  price,
  distance,
  offer,
  moreOffers,
  bankOffer
}) => {
  return (
    <div className="min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 overflow-hidden cursor-pointer">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-[160px] w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
          <h3 className="text-sm font-semibold">{name}</h3>

          <div className="absolute right-3 bottom-3 bg-green-600 px-2 py-[2px] text-xs rounded-md">
            ⭐ {rating}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-3 text-xs text-gray-600 space-y-1">
        <p>{cuisines}</p>

        <div className="flex justify-between">
          <span>{location}</span>
          <span>{distance}</span>
        </div>

        <div className="flex justify-between">
          <span>{price}</span>
        </div>

        {/* Offer */}
        <div className="mt-2 flex justify-between bg-green-600 text-white px-2 py-2 rounded-md text-xs">
          <span>{offer}</span>
          <span>{moreOffers}</span>
        </div>

        {/* Bank Offer */}
        <div className="bg-green-100 text-green-700 text-xs px-2 py-2 rounded-md text-center">
          {bankOffer}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;