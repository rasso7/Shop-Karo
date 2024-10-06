const products = [
  {
    name: 'Adilenium Season 2 Team 93 Jersey',
    image: '/images/adid-jersey.png',
    description:
      'The Adilenium Season 2 Team 93 Jersey blends bold design with comfort, celebrating team spirit and excellence. Featuring the iconic 93 logo its a must-have for fans and players alike, perfect for both on-field action and casual wear.',
    brand: 'Adidas',
    category: 'Electronics',
    price: 95.99,
    countInStock: 10,
    rating: 5,
    numReviews: 120,
  },
  {
    name: 'New Balance BB550 Sneakers For Men',
    image: '/images/nb-550.jpg',
    description:
      'The 550 debuted in 1989, gaining popularity on basketball courts. After being archived, it was re-released in limited editions in 2020 and fully in 2021, quickly becoming a fashion favorite. Its low-top silhouette and leather upper offer a sleek take on late 80s designs, timeless in any era.',
    brand: 'New Balance',
    category: 'Shoes',
    price: 92.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'ASUS ROG Strix SCAR 16 (2024), i9 14900HX 14th Gen, 240Hz, Gaming Laptop (32GB DDR5/2TB SSD/12GB RTX 4080)',
    image: '/images/asus.jpg',
    description:
      'The ASUS ROG Strix SCAR 16 (2024) is a high-performance gaming laptop powered by an Intel Core i9 14th Gen processor and 12GB RTX 4080 GPU. Its 16-inch 2.5K QHD+ 240Hz display ensures stunning visuals, while 32GB DDR5 RAM and a 2TB SSD provide fast performance and ample storage. Featuring per-key RGB lighting, a 90WHr battery, and Windows 11, it’s designed for top-tier gaming in a sleek, 2.65kg package.',
    brand: 'Asus',
    category: 'Electronics',
    price: 3429.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Mango half zip striped sweater in white',
    image: '/images/mago.png',
    description:
      'Sweaters & Cardigans by Mango A lesson in layering Stripe design High neck Partial zip closure Long sleeves Regular fit',
    brand: 'Mango',
    category: 'Women',
    price: 59.99,
    countInStock: 10,
    rating: 5,
    numReviews: 105,
  },
  {
    name: 'Apple Iphone 16',
    image: '/images/iphone_16.jpg',
    description:
      'iPhone 16. Built for Apple Intelligence. Featuring Camera Control. 48 MP Fusion camera. Five vibrant colours. And A18 chip.',
    brand: 'Apple',
    category: 'Electronics',
    price: 940.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'SONY PS5 Controller–Marvel’s SpiderMan 2 Limited Edition Gamepad',
    image: '/images/controller.jpg',
    description:
      'The Sony PlayStation 5 DualSense Wireless Controller – Marvel’s Spider-Man 2 Limited Edition features a striking red and black design inspired by the game. Built for the PS5, it offers immersive haptic feedback, adaptive triggers, and all the precision you need for a next-gen gaming experience. A must-have for Spider-Man fans!',
    brand: 'Sony',
    category: 'Electronics',
    price: 160.99,
    countInStock: 5,
    rating: 5,
    numReviews: 55,
  },

  {
    name: 'Air Jordan 1 Retro low OG x Zion Williamson (Voodoo)',
    image: '/images/nike-aj1.jpg',
    description:
      'The Jordan 1 Retro Low OG Zion Williamson Voodoo combines earthy tones with premium suede and canvas for a rustic, stylish look. Voodoo-inspired stitching and details make it unique, while its comfort and durability ensure its a must-have for sneaker enthusiasts ',
    brand: 'Jordan',
    category: 'Shoes',
    price: 690.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Sony Wh-1000Xm5 Wireless Headphone',
    image: '/images/sony.jpg',
    description:
      'The Sony WH-1000XM5 wireless headphones feature industry-leading noise cancellation, 8 mics for clear calls, and up to 40 hours of battery life. A quick 3-minute charge gives 3 hours of playback, and multi-point connectivity ensures seamless switching between devices. ',
    brand: 'Sony',
    category: 'Headphone',
    price: 321.31,
    countInStock: 0,
    rating: 4,
    numReviews: 18,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Adidas Originals Street track jacket in black and red',
    image: '/images/adi-men.png',
    description:
      'The adidas Originals Street Track Jacket in black and red features a sleek design with bold 3-Stripes on the sleeves and a Trefoil logo on the chest. Made from lightweight polyester, it’s perfect for casual wear and light activity.',
    brand: 'Adidas',
    category: 'clothes',
    price: 70,
    countInStock: 7,
    rating: 3.5,
    numReviews: 12,
  },
  {
    name: 'ViewSonic (From USA) 60.96 Cm (24") FHD Fast IPS 240Hz 0.5ms Premium Gaming Monitor',
    image: '/images/240-moni.jpg',
    description:
      'The ViewSonic XG2431 is a 24" FHD gaming monitor with a 240Hz refresh rate, 0.5ms response time, and HDR 400 support. It features height adjustment, tilt, pivot, swivel, and versatile connectivity, making it perfect for fast-paced gaming.',
    brand: 'ViewSonic',
    category: 'Electronics',
    price: 70,
    countInStock: 2,
    rating: 4,
    numReviews: 25,
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 270.99,
    countInStock: 11,
    rating: 4,
    numReviews: 11,
  },
  {
    name: 'Jordan 1 Retro Low OG-Zion Williamson Voodoo',
    image: '/images/nike-aj1.jpg',
    description:
      'The Jordan 1 Retro Low OG Zion Williamson Voodoo features earthy tones, canvas and suede materials, and intricate voodoo-inspired details for a bold, unique look',
    brand: 'Jordan',
    category: 'Shoes',
    price: 690.21,
    countInStock: 9,
    rating: 4,
    numReviews: 9,
  },
  {
    name: 'Nike Brasilia JDI Kids Mini Backpack (11L)',
    image: '/images/kid-bag.jpg',
    description:
      'The Jordan 1 Retro Low OG Zion Williamson Voodoo features earthy tones, canvas and suede materials, and intricate voodoo-inspired details for a bold, unique look',
    brand: 'Nike',
    category: 'Bags',
    price: 19.21,
    countInStock: 5,
    rating: 3.5,
    numReviews: 8,
  }, 
   {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },



];

export default products;
