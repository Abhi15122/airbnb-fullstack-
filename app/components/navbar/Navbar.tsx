"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-6 border-b-2 border-gray-200 sticky bg-gray-50 top-0">
      <Link href="/">
        <h1 className="text-xl font-bold text-rose-500 cursor-pointer">
          airbnb
        </h1>
      </Link>
      <SearchBar />
      <UserMenu />
    </nav>
  );
};

export default Navbar;
