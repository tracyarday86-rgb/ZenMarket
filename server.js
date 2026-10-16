const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Mock products with high-quality Unsplash image URLs
const products = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: 99.99, 
      category: 'Electronics',
      description: 'Enjoy clear, immersive sound for music, calls, and travel. These comfortable over-ear headphones feature cushioned ear pads and a foldable design for easy everyday use.',
      image: 'https://images.pexels.com/photos/210927/pexels-photo-210927.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    { 
      id: 2, 
      name: 'Smart Fitness Watch', 
      price: 149.99, 
      category: 'Wearables',
      description: 'Keep your day on track with activity, workout, and sleep tracking in a sleek everyday watch. Its clear display and adjustable strap make it comfortable from the gym to the office.',
      image: 'https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    { 
      id: 3, 
      name: 'Ergonomic Office Chair', 
      price: 220.00, 
      category: 'Furniture',
      description: 'Settle in for focused work with a supportive high-back design, padded seat, and adjustable height. A polished frame and neutral finish suit a home office or workspace.',
      image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&q=80'
    },
    { 
      id: 4, 
      name: 'Minimalist Backpack', 
      price: 45.50, 
      category: 'Accessories',
      description: 'A clean, versatile backpack for commutes, classes, and weekend trips. The roomy main compartment keeps daily essentials organized, while adjustable straps make carrying comfortable.',
      image: 'https://images.pexels.com/photos/9629915/pexels-photo-9629915.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 5,
      name: 'Human Hair Lace-Front Wig',
      price: 189.00,
      category: 'Hair',
      description: 'A soft, natural-looking lace-front style made with human hair for versatile everyday wear. The pre-shaped hairline and adjustable cap are designed for a comfortable, secure fit.',
      image: 'https://images.pexels.com/photos/4724468/pexels-photo-4724468.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 6,
      name: 'Chanel Classic Flap Bag',
      price: 10800.00,
      category: 'Designer Fashion',
      description: 'An iconic quilted flap-bag silhouette with a chain shoulder strap and structured interior. This designer-priced listing is for a new authentic luxury item; verify provenance and boutique availability before purchase.',
      image: 'https://images.pexels.com/photos/5352628/pexels-photo-5352628.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 7,
      name: 'Gucci Ace Leather Sneaker',
      price: 790.00,
      category: 'Designer Footwear',
      description: 'A low-profile leather court sneaker inspired by the classic Ace silhouette. Pair it with casual or smart-casual looks; designer sizing and availability may vary.',
      image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 8,
      name: 'Eau de Parfum Spray',
      price: 120.00,
      category: 'Fragrance',
      description: 'A versatile eau de parfum for day or evening, presented in a travel-friendly glass spray bottle. Scent notes and wear time vary by fragrance; check the product packaging for ingredients.',
      image: 'https://images.pexels.com/photos/10873814/pexels-photo-10873814.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 9,
      name: 'Gold-Plated Chain Necklace',
      price: 48.00,
      category: 'Jewelry',
      description: 'A simple polished chain that layers easily or looks elegant on its own. Store it dry and away from perfumes to help preserve its gold-plated finish.',
      image: 'https://images.pexels.com/photos/7679824/pexels-photo-7679824.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 10,
      name: 'Insulated Stainless Steel Water Bottle',
      price: 28.00,
      category: 'Home',
      description: 'Take drinks on the go in a reusable stainless steel bottle with a secure, easy-carry design. Hand-wash the lid and check the product label for care and temperature guidance.',
      image: 'https://images.pexels.com/photos/31699476/pexels-photo-31699476.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 11,
      name: 'Steam Iron',
      price: 39.99,
      category: 'Home',
      description: 'Smooth everyday wrinkles with a compact steam iron designed for routine garment care. Its simple controls and comfortable handle make it a practical addition to the laundry room.',
      image: 'https://images.pexels.com/photos/5202923/pexels-photo-5202923.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 12,
      name: 'Wooden Building Block Toy',
      price: 24.99,
      category: 'Toys',
      description: 'A colorful set of wooden building blocks for open-ended play and creative construction. Recommended age and small-parts safety information should be checked on the package.',
      image: 'https://images.pexels.com/photos/1822568/pexels-photo-1822568.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 13,
      name: 'Bestselling Hardcover Book',
      price: 19.00,
      category: 'Books',
      description: 'A gift-ready hardcover for your reading shelf or bedside table. This sample listing uses a generic title; confirm the specific title, author, edition, and condition with the seller before ordering.',
      image: 'https://images.pexels.com/photos/8762862/pexels-photo-8762862.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 14,
      name: 'Hydrating Face Cream',
      price: 34.00,
      category: 'Skin Care',
      description: 'A daily moisturizer made to leave skin feeling soft and hydrated. Review the ingredient list and perform a patch test before use, especially if you have sensitive skin.',
      image: 'https://images.pexels.com/photos/6925480/pexels-photo-6925480.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 15,
      name: 'Detangling Paddle Hair Brush',
      price: 16.00,
      category: 'Hair',
      description: 'A lightweight paddle brush with flexible bristles to help smooth and detangle everyday styles. Use gentle strokes from the ends upward, especially on wet or delicate hair.',
      image: 'https://images.pexels.com/photos/5468620/pexels-photo-5468620.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
];

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the ZenMarket API!');
});

// Products API route
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Single product route
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found!' });
    }

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});