import { Listing } from "@/app/Types";

type Props = {
  listing: Listing;
};

export default function ListingReviews({ listing }: Props) {
  return (
    <div>
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">
        ⭐ {listing.rating} · {listing.reviewCount} reviews
      </h2>

      {/* Reviews list */}
      <div className="space-y-4">
        {listing.reviews.slice(0, 3).map((review, index) => (
          <div key={index}>
            <p className="font-semibold">{review.author}</p>

            <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
          </div>
        ))}
      </div>

      <hr className="my-6" />
    </div>
  );
}
