import { listings } from "../data/ListingData";
import SearchResults from "../components/SearchResults";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string }>;
}) {
  const params = await searchParams;
  const location = params.location || "";

  const filtered = location
    ? listings.filter((l) =>
        l.location.toLowerCase().includes(location.toLowerCase()),
      )
    : [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Stays in {location}</h1>

      {filtered.length === 0 ? (
        <p>No listings found</p>
      ) : (
        <SearchResults listings={filtered} />
      )}
    </div>
  );
}
