const listings = [
  {
    id: "1",
    title: "Luxury Villa in Goa",
    location: "Goa, India",
    price: 8500,
    rating: 4.9,
    reviewCount: 124,
    maxGuests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description: "A beautiful villa steps from the beach with private pool.",
    amenities: ["WiFi", "Pool", "Kitchen", "Air conditioning", "Beach access"],
    host: {
      name: "Priya Sharma",
      isSuperhost: true,
      joinYear: 2019,
    },
    reviews: [
      {
        author: "Rahul",
        date: "March 2024",
        rating: 5,
        comment: "Absolutely stunning place. Host was super helpful!",
      },
    ],
  },
  {
    id: "2",
    title: "Cozy Apartment in Mumbai",
    location: "Mumbai, India",
    price: 3200,
    rating: 4.7,
    reviewCount: 89,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description:
      "Modern apartment in the heart of Mumbai, near all major attractions.",
    amenities: ["WiFi", "Kitchen", "Air conditioning", "Washer"],
    host: {
      name: "Amit Patel",
      isSuperhost: false,
      joinYear: 2021,
    },
    reviews: [
      {
        author: "Sneha",
        date: "February 2024",
        rating: 5,
        comment: "Perfect location, very clean!",
      },
    ],
  },
  {
    id: "3",
    title: "Heritage Haveli in Jaipur",
    location: "Jaipur, India",
    price: 5500,
    rating: 4.8,
    reviewCount: 210,
    maxGuests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    description:
      "A royal experience in a 200-year-old haveli with rooftop views.",
    amenities: ["WiFi", "Rooftop", "Kitchen", "Parking", "Air conditioning"],
    host: {
      name: "Kavya Singh",
      isSuperhost: true,
      joinYear: 2018,
    },
    reviews: [
      {
        author: "Vikram",
        date: "January 2024",
        rating: 5,
        comment: "Felt like royalty. Will definitely come back!",
      },
    ],
  },
];

module.exports = listings;
