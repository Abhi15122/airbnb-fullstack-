"use client";

import { useRouter } from "next/navigation";
import { Listing } from "../Types";

export default function SearchResults({ listings }: { listings: Listing[] }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {listings.map((l) => (
        <div
          key={l.id}
          onClick={() => router.push(`/listings/${l.id}`)}
          className="border p-4 rounded-xl cursor-pointer hover:shadow-md transition"
        >
          <img
            src={l.images[0]}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="mt-2 font-semibold">{l.title}</h2>
          <p className="text-sm text-gray-500">{l.location}</p>
        </div>
      ))}
    </div>
  );
}
