const imageFiles = import.meta.glob(
  "../assets/images/products/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const productImages = Object.values(imageFiles);

const products = [
  {
    id: 1,
    name: "Noise ColorFit Pro",
    category: "Smartwatch",
    price: 2999,
    oldPrice: 4999,
    rating: 4.5,
    image: productImages[0],
    description:
      "A stylish smartwatch with fitness tracking, notifications and everyday smart features.",
  },
  {
    id: 2,
    name: "NoiseFit Active",
    category: "Smartwatch",
    price: 2499,
    oldPrice: 3999,
    rating: 4.4,
    image: productImages[1],
    description:
      "Stay active and connected with a modern smartwatch designed for everyday use.",
  },
  {
    id: 3,
    name: "Noise Buds",
    category: "Earbuds",
    price: 1499,
    oldPrice: 2499,
    rating: 4.3,
    image: productImages[2],
    description:
      "Wireless earbuds with powerful sound, comfortable fit and long battery life.",
  },
  {
    id: 4,
    name: "Noise Buds VS",
    category: "Earbuds",
    price: 1799,
    oldPrice: 2999,
    rating: 4.5,
    image: productImages[3],
    description:
      "Enjoy immersive audio with wireless connectivity and a compact charging case.",
  },
  {
    id: 5,
    name: "NoiseFit Force",
    category: "Smartwatch",
    price: 3299,
    oldPrice: 5499,
    rating: 4.6,
    image: productImages[4],
    description:
      "A rugged smartwatch built for fitness, outdoor activities and everyday adventures.",
  },
  {
    id: 6,
    name: "Noise Airwave",
    category: "Accessories",
    price: 1999,
    oldPrice: 2999,
    rating: 4.2,
    image: productImages[5],
    description:
      "A stylish technology accessory designed to complement your everyday lifestyle.",
  },
];

export default products;