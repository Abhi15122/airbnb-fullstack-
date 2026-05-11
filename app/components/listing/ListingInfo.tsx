import { Listing } from "@/app/Types";

type Props = {
  listing: Listing;
};

export default function ListingInfo({ listing }: Props) {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">{listing.title}</h1>

      <div className="flex items-center gap-2 mt-1">
        <span>⭐ {listing.rating}</span>
        <span className="text-gray-500">·</span>
        <span className="text-gray-500 underline cursor-pointer">
          {listing.reviewCount} reviews
        </span>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-2 text-gray-700">
        <span>Entire home</span>
        <span>·</span>
        <span>{listing.guests} guests</span>
        <span>·</span>
        <span>{listing.bedrooms} bedrooms</span>
        <span>·</span>
        <span>{listing.beds} beds</span>
        <span>·</span>
        <span>{listing.bathrooms} bathrooms</span>
      </div>
    </div>
  );
}
