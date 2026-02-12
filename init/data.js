//data only inserted once not needed again . 
const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "A charming beachfront cottage perfect for relaxing holidays with ocean views.",
    price: 2500,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1" },
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stylish loft in the heart of the city with modern interiors and city views.",
    price: 3200,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },
    location: "New York",
    country: "United States"
  },
  {
    title: "Luxury Villa with Pool",
    description: "Premium villa with private pool, garden, and luxury amenities.",
    price: 5500,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Peaceful Mountain Cabin",
    description: "Quiet mountain cabin surrounded by forests and fresh air.",
    price: 1800,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
    location: "Manali",
    country: "India"
  },
  {
    title: "Traditional Rajasthani Haveli",
    description: "Heritage haveli with authentic Rajasthani architecture and culture.",
    price: 2200,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Hilltop View Resort",
    description: "Resort offering panoramic hill views and peaceful surroundings.",
    price: 2600,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501117716987-c8e5f3a10d8c" },
    location: "Ooty",
    country: "India"
  },
  {
    title: "Serene Lake House",
    description: "Beautiful lake house ideal for calm evenings and nature lovers.",
    price: 2400,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae" },
    location: "Nainital",
    country: "India"
  },
  {
    title: "Urban Studio Apartment",
    description: "Compact studio apartment perfect for solo travelers.",
    price: 1500,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Luxury Desert Camp",
    description: "Stay in a luxury tented camp amidst golden sand dunes.",
    price: 2800,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548013146-72479768bada" },
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Countryside Farm Stay",
    description: "Experience rural life with fresh air and organic food.",
    price: 1300,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    location: "Punjab",
    country: "India"
  },

  // ---------- International ----------
  {
    title: "Romantic Paris Apartment",
    description: "Elegant apartment close to famous Parisian landmarks.",
    price: 4200,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    location: "Paris",
    country: "France"
  },
  {
    title: "Alpine Ski Chalet",
    description: "Cozy wooden chalet near ski slopes and snowy landscapes.",
    price: 5000,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Seaside Greek Villa",
    description: "White-washed villa overlooking the Aegean Sea.",
    price: 4800,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Tokyo Capsule Stay",
    description: "Unique capsule-style stay in the heart of Tokyo.",
    price: 2000,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Rainforest Treehouse",
    description: "Stay among trees in this eco-friendly treehouse.",
    price: 3000,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    location: "Amazon",
    country: "Brazil"
  },
  {
    title: "Royal Palace Stay",
    description: "Live like royalty in this grand palace property.",
    price: 6000,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Snow Igloo Experience",
    description: "Once-in-a-lifetime stay inside a snow igloo.",
    price: 5200,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" },
    location: "Lapland",
    country: "Finland"
  },
  {
    title: "Safari Lodge",
    description: "Wildlife lodge offering jungle safaris and luxury tents.",
    price: 3500,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090" },
    location: "Masai Mara",
    country: "Kenya"
  },
  {
    title: "Beach Hut Escape",
    description: "Simple beach hut with direct beach access.",
    price: 1700,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2" },
    location: "Goa",
    country: "India"
  },
  {
    title: "Luxury Penthouse Suite",
    description: "High-rise penthouse with skyline views and premium facilities.",
    price: 6500,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Forest Eco Lodge",
    description: "Eco-friendly lodge surrounded by dense forest.",
    price: 2100,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
    location: "Wayanad",
    country: "India"
  },
  {
    title: "Historic London Townhouse",
    description: "Classic British townhouse with modern comforts.",
    price: 4000,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464146072230-91cabc968266" },
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Island Bamboo Cottage",
    description: "Eco bamboo cottage on a private tropical island.",
    price: 2900,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519824145371-296894a0daa9" },
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Minimalist Scandinavian Home",
    description: "Clean, modern Scandinavian design with cozy vibes.",
    price: 3700,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
    location: "Oslo",
    country: "Norway"
  },
  {
    title: "Backpacker Hostel",
    description: "Budget-friendly hostel with vibrant social spaces.",
    price: 900,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551776235-dde6d4829808" },
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Riverside Wooden Cabin",
    description: "Wooden cabin located right beside a flowing river.",
    price: 1600,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499696010181-8c5b3e5a3a89" },
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Cliffside Ocean Retreat",
    description: "Stunning cliffside retreat with uninterrupted ocean views.",
    price: 5400,
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b7b" },
    location: "Big Sur",
    country: "United States"
  }
];


module.exports = { data: sampleListings };