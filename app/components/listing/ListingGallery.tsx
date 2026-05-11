type Props = {
  images: string[];
};

export default function ListingGallery({ images }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
      {/* LEFT BIG IMAGE */}
      <div className="h-[400px]">
        <img
          src={images[0]}
          alt="Main"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>

      {/* RIGHT GRID */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[400px]">
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={img}
              alt={`img-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
