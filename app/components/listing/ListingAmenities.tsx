import { Listing } from "@/app/Types";

type Props = {
  listing: Listing;
};

export default function ListingAmenities({ listing }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">What this place offers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listing.amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-6">
            <span>✔</span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      <hr className="my-6" />
    </div>
  );
}
