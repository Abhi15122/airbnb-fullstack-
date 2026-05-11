"use client";

import { useEffect, useState } from "react";

export default function ScrollNavbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.getElementById("photos");
      if (!gallery) return;

      const rect = gallery.getBoundingClientRect();

      if (rect.bottom < window.innerHeight * 0.3) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center gap-8">
        <button
          onClick={() => scrollToSection("photos")}
          className="font-medium hover:underline"
        >
          Photos
        </button>

        <button
          onClick={() => scrollToSection("amenities")}
          className="font-medium hover:underline"
        >
          Amenities
        </button>

        <button
          onClick={() => scrollToSection("reviews")}
          className="font-medium hover:underline"
        >
          Reviews
        </button>
      </div>
    </div>
  );
}
