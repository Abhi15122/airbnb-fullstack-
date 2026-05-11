export default function LanguageContent() {
  const languages = [
    { name: "English", region: "United States" },
    { name: "English", region: "United Kingdom" },
    { name: "हिंदी", region: "भारत" },
    { name: "ಕನ್ನಡ", region: "ಭಾರತ" },
  ];

  return (
    <div className="space-y-6">
      {/* Translation Toggle */}
      <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
        <div>
          <p className="font-medium">Translation</p>
          <p className="text-sm text-gray-500">
            Automatically translate descriptions and reviews
          </p>
        </div>

        <div className="w-10 h-6 bg-black rounded-full flex items-center justify-end px-1">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Suggested */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Suggested languages and regions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <div
              key={i}
              className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <p>{lang.name}</p>
              <p className="text-sm text-gray-500">{lang.region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
