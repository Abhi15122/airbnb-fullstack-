import { Listing } from "@/app/Types";

type Props = {
  listing: Listing;
};

export default function ListingHost({ listing }: Props) {
  const { host } = listing;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-semibold">Hosted by {host.name}</h2>

          <p className="text-gray-500 text-sm mt-1">
            {host.isSuperhost && "Superhost · "}Joined {host.joinedYear}
          </p>
        </div>

        {/* RIGHT */}
        <img
          src={host.avatar}
          alt={host.name}
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>

      <hr className="my-6" />
    </div>
  );
}
