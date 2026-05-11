"use client";
import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import Tab from "./modals/globemodal/Tab";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  // 🔽 DROPDOWN OUTSIDE CLICK
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOut = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [isOpen]);

  // 🌐 MODAL OUTSIDE CLICK

  return (
    <div className="relative flex items-center gap-3">
      {/* 🌐 Globe */}
      <div
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
      >
        <FaGlobe />
      </div>

      {/* 🌐 Modal */}
      <Tab isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ☰ Menu */}
      <div className="relative" ref={menuRef}>
        {/* Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
        >
          <FiMenu />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute p-6 bg-white rounded-xl shadow-md top-12 w-60 right-0 z-50">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Help Centre
            </div>

            <hr className="text-gray-300" />

            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Become a host
            </div>

            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Refer a host
            </div>

            <hr className="text-gray-300" />

            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Find a co-host
            </div>

            <hr className="text-gray-300" />

            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold">
              Login or SignUp
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
