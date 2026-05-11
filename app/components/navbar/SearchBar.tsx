"use client";

import { useState, useEffect } from "react";
import { listings } from "@/app/data/ListingData";
import { useRouter } from "next/navigation";
import { fetchCities } from "@/app/lib/geodb";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const [results, setResults] = useState<{ name: string; country: string }[]>(
    [],
  );

  useEffect(() => {
    const timer = setTimeout(async () => {
      // console.log("Query changed:", query);
      if (!query) {
        setResults([]);
        return;
      }
      const cities = await fetchCities(query);
      // console.log("Fetched cities:", cities);
      setResults(cities);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-90">
      <div className="border rounded-full px-4 py-2 w-90 shadow-sm hover:shadow-md transition">
        <input
          type="text"
          placeholder="Search places..."
          className="w-full outline-none bg-transparent "
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      {query && (
        <div className="absolute w-full  bg-white shadow-md rounded-xl mt-2 max-h-60 overflow-y-auto z-50">
          {results.map((city, index) => (
            <div
              key={index}
              onClick={() => {
                router.push(`/search?location=${city.name}`);
                setQuery("");
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {city.name}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
