import React from "react";
import { Listing } from "../Types";
import Link from "next/link";
import { fetchImages } from "../lib/unsplash";

type Props = {
  listing: Listing;
};

const PropertyCard = async ({ listing }: Props) => {
  const images = await fetchImages(listing.location);
  const image = images[0] || listing.images[0];
  return (
    <Link href={`/listings/${listing._id}`}>
      <div className="cursor-pointer group">
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
          <img
            src={image}
            alt={listing.title}
            className="w-full h-60 object-cover"
          />

          <div className="p-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{listing.location}</h3>
              <p>⭐ {listing.rating}</p>
            </div>

            <p className="text-gray-500 text-sm">{listing.title}</p>

            <p className="mt-2 font-semibold">
              ₹{listing.price} <span className="font-normal">/ night</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
