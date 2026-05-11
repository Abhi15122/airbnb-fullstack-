require('dotenv').config()
const mongoose = require('mongoose')
const Listing = require('../models/Listing')

const listings = [
  {
    title: 'Luxury Villa in Goa',
    location: 'Goa, India',
    price: 8500,
    rating: 4.9,
    reviewCount: 124,
    maxGuests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description: 'A beautiful villa steps from the beach with private pool.',
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Air conditioning', 'Beach access'],
    host: { name: 'Priya Sharma', isSuperhost: true, joinYear: 2019 },
    reviews: [{ author: 'Rahul', date: 'March 2024', rating: 5, comment: 'Absolutely stunning!' }]
  },
  {
    title: 'Cozy Apartment in Mumbai',
    location: 'Mumbai, India',
    price: 3200,
    rating: 4.7,
    reviewCount: 89,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: 'Modern apartment in the heart of Mumbai.',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Washer'],
    host: { name: 'Amit Patel', isSuperhost: false, joinYear: 2021 },
    reviews: [{ author: 'Sneha', date: 'February 2024', rating: 5, comment: 'Perfect location!' }]
  },
  {
    title: 'Heritage Haveli in Jaipur',
    location: 'Jaipur, India',
    price: 5500,
    rating: 4.8,
    reviewCount: 210,
    maxGuests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    description: 'A royal experience in a 200-year-old haveli with rooftop views.',
    amenities: ['WiFi', 'Rooftop', 'Kitchen', 'Parking', 'Air conditioning'],
    host: { name: 'Kavya Singh', isSuperhost: true, joinYear: 2018 },
    reviews: [{ author: 'Vikram', date: 'January 2024', rating: 5, comment: 'Felt like royalty!' }]
  },
  {
    title: 'Mountain Cottage in Shimla',
    location: 'Shimla, India',
    price: 4200,
    rating: 4.6,
    reviewCount: 67,
    maxGuests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    description: 'Cozy cottage with stunning mountain views and fireplace.',
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Mountain view', 'Parking'],
    host: { name: 'Rajesh Kumar', isSuperhost: false, joinYear: 2020 },
    reviews: [{ author: 'Ananya', date: 'December 2023', rating: 5, comment: 'Magical winter stay!' }]
  },
  {
    title: 'Houseboat in Kerala',
    location: 'Alleppey, Kerala, India',
    price: 7000,
    rating: 4.9,
    reviewCount: 189,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    description: 'Traditional Kerala houseboat on the backwaters with all meals included.',
    amenities: ['WiFi', 'Meals included', 'AC', 'Deck', 'Fishing'],
    host: { name: 'Thomas Mathew', isSuperhost: true, joinYear: 2017 },
    reviews: [{ author: 'Meera', date: 'November 2023', rating: 5, comment: 'Once in a lifetime!' }]
  },
  {
    title: 'Beachfront Shack in Gokarna',
    location: 'Gokarna, Karnataka, India',
    price: 2800,
    rating: 4.5,
    reviewCount: 43,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: 'Simple beachfront shack right on Om Beach. Fall asleep to waves.',
    amenities: ['Beach access', 'Hammock', 'Fan', 'Outdoor shower'],
    host: { name: 'Surfer Sid', isSuperhost: false, joinYear: 2022 },
    reviews: [{ author: 'Rohan', date: 'January 2024', rating: 4, comment: 'Rustic but magical!' }]
  },
  {
    title: 'Designer Loft in Bangalore',
    location: 'Bangalore, India',
    price: 4500,
    rating: 4.7,
    reviewCount: 156,
    maxGuests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    description: 'Stylish modern loft in Indiranagar with rooftop access.',
    amenities: ['WiFi', 'Rooftop', 'Kitchen', 'Air conditioning', 'Gym'],
    host: { name: 'Nisha Reddy', isSuperhost: true, joinYear: 2019 },
    reviews: [{ author: 'Aditya', date: 'March 2024', rating: 5, comment: 'Super chic place!' }]
  },
  {
    title: 'Desert Camp in Jaisalmer',
    location: 'Jaisalmer, India',
    price: 6500,
    rating: 4.8,
    reviewCount: 98,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: 'Luxury tent in the Thar desert with camel safari and bonfire.',
    amenities: ['Desert safari', 'Bonfire', 'Meals included', 'Stargazing'],
    host: { name: 'Deva Singh', isSuperhost: true, joinYear: 2016 },
    reviews: [{ author: 'Pooja', date: 'February 2024', rating: 5, comment: 'Stars were unreal!' }]
  },
  {
    title: 'Tea Estate Bungalow in Coorg',
    location: 'Coorg, Karnataka, India',
    price: 5800,
    rating: 4.9,
    reviewCount: 77,
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    description: 'Colonial bungalow surrounded by coffee and tea plantations.',
    amenities: ['WiFi', 'Garden', 'Kitchen', 'Plantation tour', 'Fireplace'],
    host: { name: 'George Coorg', isSuperhost: true, joinYear: 2018 },
    reviews: [{ author: 'Divya', date: 'March 2024', rating: 5, comment: 'Woke up to mist and coffee!' }]
  },
  {
    title: 'Penthouse in Delhi',
    location: 'New Delhi, India',
    price: 9500,
    rating: 4.8,
    reviewCount: 62,
    maxGuests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    description: 'Luxury penthouse in South Delhi with 360-degree city views.',
    amenities: ['WiFi', 'Pool', 'Gym', 'Kitchen', 'Concierge', 'Parking'],
    host: { name: 'Arjun Malhotra', isSuperhost: true, joinYear: 2019 },
    reviews: [{ author: 'Sanya', date: 'April 2024', rating: 5, comment: 'Best stay in Delhi!' }]
  }
]

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  await Listing.deleteMany()
  await Listing.insertMany(listings)
  console.log('10 listings seeded!')
  process.exit()
}

seed()
