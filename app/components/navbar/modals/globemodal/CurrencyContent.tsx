export default function CurrencyContent() {
  const currencies = [
    { name: "Indian rupee", code: "INR", symbol: "₹" },
    { name: "US Dollar", code: "USD", symbol: "$" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "British Pound", code: "GBP", symbol: "£" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Choose a currency</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currencies.map((cur, i) => (
          <div
            key={i}
            className="p-3 border rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <p>{cur.name}</p>
            <p className="text-sm text-gray-500">
              {cur.code} — {cur.symbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
