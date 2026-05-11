import { Listing } from "@/app/Types";

type Props = {
  listing: Listing;
};

export default function ListingDescription({ listing }: Props) {
  return (
    <div>
      {" "}
      <p className="text-gray-700 leading-relaxed">{listing.description}</p>
      <hr className="my-6" />
    </div>
  );
}
