import ListingGallery from "@/app/components/listing/ListingGallery";
import ListingInfo from "@/app/components/listing/ListingInfo";
import ListingHost from "@/app/components/listing/ListingHost";
import ListingDescription from "@/app/components/listing/ListingDescription";
import ListingAmenities from "@/app/components/listing/ListingAmenities";
import ListingReviews from "@/app/components/listing/ListingReviews";
import BookingWidget from "@/app/components/listing/BookingWidget";
import ScrollNavbar from "@/app/components/listing/ScrollNavbar";
import { fetchImages } from "@/app/lib/unsplash";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ListingPage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/api/listings/${id}`);
  const json = await res.json();
  const listing = json.data;
  if (!listing) {
    return <div>Listing not found</div>;
  }
  const images = await fetchImages(listing.location);

  return (
    <>
      <ScrollNavbar />
      <div className="max-w-6xl mx-auto px-6 mt-6">
        {/* Gallery */}
        <div id="photos">
          <ListingGallery images={images.length ? images : listing.images} />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">
            <ListingInfo listing={listing} />
            <ListingHost listing={listing} />
            <ListingDescription listing={listing} />
            <div id="amenities">
              <ListingAmenities listing={listing} />
            </div>
            <div id="reviews">
              <ListingReviews listing={listing} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-1">
            <BookingWidget listing={listing} />
          </div>
        </div>
      </div>
    </>
  );
}
