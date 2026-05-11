"use client";
import { useState } from "react";
import { Listing } from "@/app/Types";

type Props = {
  listing: Listing;
};

export default function BookingWidget({ listing }: Props) {
  const [guests, setGuests] = useState(1);

  const formatLocalDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = formatLocalDate(tomorrowDate);

  const today = formatLocalDate(new Date());

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const hasDates = Boolean(checkin && checkout);
  const checkInDate = hasDates ? new Date(checkin) : null;
  const checkoutDate = hasDates ? new Date(checkout) : null;
  const diffMs =
    checkInDate && checkoutDate
      ? checkoutDate.getTime() - checkInDate.getTime()
      : 0;
  const nights = diffMs > 0 ? diffMs / (1000 * 60 * 60 * 24) : 0;
  const isRangeInvalid = hasDates && nights <= 0;
  const canReserve = hasDates && !isRangeInvalid;
  const totalPrice = canReserve ? listing.price * nights : 0;
  const displayNights = Math.floor(nights);

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="hidden md:block sticky top-24">
        <div className="shadow-lg border border-gray-200 rounded-xl p-4 space-y-5 hover:shadow-lg transition">
          {/* Price */}
          <div>
            <p className="text-xl font-semibold">
              ₹{listing.price}
              <span className="text-sm font-normal text-gray-600">
                {" "}
                per night
              </span>
            </p>

            <p className="text-sm text-gray-600 mt-1">
              ₹{totalPrice} for {displayNights} nights
            </p>
          </div>

          {/* Date + Guests Box */}
          <div className="border rounded-xl overflow-hidden  border-black-300  text-sm">
            {/* Check-in / Checkout */}
            <div className="grid grid-cols-2 divide-x">
              <div className="p-3 min-w-0 ">
                <label className="text-xs text-gray-500 whitespace-nowrap">
                  CHECK-IN
                </label>
                <input
                  className="w-full min-w-0 text-sm border-0 p-0 bg-transparent focus:outline-none"
                  type="date"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                />
              </div>

              <div className="p-3 min-w-0 ">
                <label className="text-xs text-gray-500 ">CHECKOUT</label>

                <input
                  type="date"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                  className="w-full min-w-0 text-sm border-0 p-0 bg-transparent focus:outline-none"
                />
              </div>
            </div>
            {isRangeInvalid && (
              <p className="px-3 pt-2 text-xs text-red-500">
                check-out must be after check-in
              </p>
            )}

            {/* Guests */}
            <div className="border-t p-3">
              <p className="text-xs text-gray-500">GUESTS</p>
              <div className="flex items-center justify-between mt-1">
                <p className="font-medium">
                  {guests} guest{guests > 1 && "s"}
                </p>

                <div className=" flex items-center gap-2">
                  <button
                    onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                    className="w-7 h-7 border rounded-full flex items-center justify-center text-sm"
                  >
                    -
                  </button>

                  <button
                    onClick={() => setGuests((prev) => prev + 1)}
                    className="w-7 h-7 border rounded-full flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 text-sm text-gray-600 p-3 rounded-lg text-center">
            Free cancellation before 30 April
          </div>

          {/* Button */}
          <button
            disabled={!canReserve}
            className={`w-full ${
              canReserve
                ? "bg-rose-500 hover:bg-rose-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }  py-3 rounded-xl font-semibold transition`}
          >
            Reserve
          </button>

          {/* Info */}
          <p className="text-xs text-gray-500 text-center">
            You won&apos;t be charged yet
          </p>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center md:hidden z-50">
        <div>
          <p className="font-semibold text-base">₹{listing.price}</p>
          <p className="text-xs text-gray-500">per night</p>
        </div>

        <button
          disabled={!canReserve}
          className={`${
            canReserve
              ? "bg-rose-500 hover:bg-rose-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } px-6 py-2 rounded-lg font-semibold`}
        >
          Reserve
        </button>
      </div>
    </>
  );
}
