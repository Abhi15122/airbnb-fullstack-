import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import PropertyCard from "./features/PropertyCard";

export default async function Home() {
  async function getlistings() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listings`);
    const data = await res.json();
    return data.data;
  }

  const listings = await getlistings();

  return (
    <div>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
          {listings.map((listing: any) => (
            <PropertyCard key={listing._id} listing={listing} />
          ))}
        </div>
      </main>
    </div>
  );
}
