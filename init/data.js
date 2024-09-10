const sampleProducts = [
  {
    title: "Apple iPhone 13",
    description: "Latest iPhone model with A15 Bionic chip, 128GB storage.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1542561598-4c798e65151b?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 799.99,
    category: "electronics"
  },
  {
    title: "Samsung Galaxy S21",
    description: "Flagship Samsung smartphone with 5G connectivity, 256GB storage.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1612265152891-1e03ea654b0b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 699.99,
    category: "electronics"
  },
  {
    title: "Sony WH-1000XM4 Headphones",
    description: "Noise-cancelling wireless headphones with superior sound quality.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1613732814108-dbbd3dfce162?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 349.99,
    category: "electronics"
  },
  {
    title: "Dell XPS 13 Laptop",
    description: "13.4-inch laptop with Intel Core i7, 16GB RAM, 512GB SSD.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1099.99,
    category: "electronics"
  },
  {
    title: "Logitech MX Master 3 Mouse",
    description: "Advanced wireless mouse with ergonomic design and customizable buttons.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1611532736570-dd6b097ecbb3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 99.99,
    category: "electronics"
  },
  {
    title: "Sony PlayStation 5",
    description: "Next-gen gaming console with ultra-fast SSD and 4K gaming support.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1618836958889-76f62f3724cb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 499.99,
    category: "electronics"
  },
  {
    title: "Apple MacBook Air M1",
    description: "13-inch laptop with Apple M1 chip, 256GB SSD, and 8GB RAM.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1636916771256-cd6795c3c2b1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 999.99,
    category: "electronics"
  },
  {
    title: "Bose QuietComfort 35 II",
    description: "Wireless noise-cancelling headphones with Alexa voice control.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1607294846590-fd005d7973e8?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 299.99,
    category: "electronics"
  },
  {
    title: "Nikon D3500 DSLR Camera",
    description: "Beginner-friendly DSLR with 24.2MP sensor and Full HD video recording.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1499787177381-f06342cd251f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 449.99,
    category: "electronics"
  },
  {
    title: "Apple Watch Series 7",
    description: "Smartwatch with larger display, faster charging, and health tracking features.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1591147810559-9ae8cc24c862?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 399.99,
    category: "electronics"
  },
  {
    title: "Amazon Echo Dot (4th Gen)",
    description: "Smart speaker with Alexa and improved sound quality.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 49.99,
    category: "electronics"
  },
  {
    title: "Roku Streaming Stick 4K",
    description: "4K streaming device with voice remote and TV controls.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 49.99,
    category: "electronics"
  },
  {
    title: "ASUS ROG Strix Gaming Laptop",
    description: "15.6-inch gaming laptop with Intel Core i7, 16GB RAM, and RTX 3060 GPU.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1499.99,
    category: "electronics"
  },
  {
    title: "Philips Hue Smart Bulb",
    description: "Smart LED bulb with 16 million colors, works with Alexa and Google Assistant.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 39.99,
    category: "electronics"
  },
  {
    title: "Apple AirPods Pro",
    description: "Wireless earbuds with active noise cancellation and customizable fit.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1506478260391-8dc8e747cdd1?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 249.99,
    category: "electronics"
  },
  {
    title: "Nest Learning Thermostat",
    description: "Smart thermostat with auto-schedule and energy-saving features.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1619140099965-06d74aaf51fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 229.99,
    category: "electronics"
  },
  {
    title: "LG OLED55CXPUA 55-inch TV",
    description: "4K Smart OLED TV with AI ThinQ and Dolby Vision.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1499.99,
    category: "electronics"
  },
  {
    title: "Microsoft Surface Pro 7",
    description: "2-in-1 laptop with Intel Core i5, 8GB RAM, and 128GB SSD.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 899.99,
    category: "electronics"
  },
  {
    title: "Instant Pot Duo 7-in-1",
    description: "Multi-functional electric pressure cooker with 7 cooking modes.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1532136868905-8094ef8ef5f2?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 89.99,
    category: "electronics"
  },
  {
    title: "Dyson V11 Torque Drive Cordless Vacuum",
    description: "Powerful cordless vacuum cleaner with advanced suction technology.",
    image: {
      filename: "productImage",
      url: "https://cdn.pixabay.com/photo/2019/07/30/16/44/vacuum-4373376_1280.png",
    },
    price: 599.99,
    category: "electronics"
  },
  {
    title: "Colgate Optic White Toothpaste",
    description: "Whitening toothpaste for a brighter smile with advanced stain removal.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1612705166546-641e59cef326?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3.99,
    category: "grooming"
  },
  {
    title: "Philips Norelco Electric Shaver 8900",
    description: "Wet and dry electric shaver with precision blades and contour detection.",
    image: {
      filename: "productImage",
      url: "https://pixabay.com/photos/razor-the-long-hair-cutter-shaver-2148442/",
    },
    price: 179.99,
    category: "grooming"
  },
  {
    title: "Old Spice High Endurance Deodorant",
    description: "Long-lasting deodorant with a fresh scent that lasts all day.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1698943220441-aa91972067a5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4.99,
    category: "grooming"
  },
  {
    title: "Gillette Fusion5 ProGlide Razor",
    description: "Men's razor with 5 anti-friction blades and a precision trimmer.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12.99,
    category: "grooming"
  },
  {
    title: "Pantene Pro-V Daily Moisture Renewal Shampoo",
    description: "Moisturizing shampoo for soft and hydrated hair.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5.99,
    category: "grooming"
  },
  {
    title: "L'Oréal Paris Revitalift Face Moisturizer",
    description: "Anti-aging face cream with SPF 30 and pro-retinol for firmer skin.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 17.99,
    category: "grooming"
  },
  {
    title: "Neutrogena Hydro Boost Water Gel",
    description: "Hydrating facial moisturizer with hyaluronic acid for smooth skin.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 18.99,
    category: "grooming"
  },
  {
    title: "Burt's Bees Lip Balm",
    description: "Natural moisturizing lip balm with beeswax and vitamin E.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1672883435480-81b9f385654e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3.29,
    category: "grooming"
  },
  {
    title: "Dove Men+Care Body Wash",
    description: "Moisturizing body wash for men with MicroMoisture technology.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1556228994-efb7c88fa0f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6.99,
    category: "grooming"
  },
  {
    title: "Aussie Miracle Curls Conditioner",
    description: "Conditioner for curly hair with coconut and Australian jojoba oil.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1556228994-efb7c88fa0f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5.49,
    category: "grooming"
  },
  {
    title: "Maybelline Great Lash Mascara",
    description: "Iconic mascara with a lash-doubling formula for bold lashes.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6.99,
    category: "grooming"
  },
  {
    title: "Tresemme Extra Hold Hair Spray",
    description: "Professional quality hair spray with long-lasting hold.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1672968831840-ab691ce8f263?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5.49,
    category: "grooming"
  },
  {
    title: "Aunt Jemima Pancake Mix",
    description: "Classic pancake mix for fluffy and delicious pancakes.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2.99,
    category: "food"
  },
  {
    title: "Nestle Toll House Chocolate Chip Cookies",
    description: "Ready-to-bake cookie dough for warm and chewy chocolate chip cookies.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1596107992981-b65d19a59157?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4.99,
    category: "food"
  },
  {
    title: "Doritos Nacho Cheese Chips",
    description: "Crunchy tortilla chips with a bold nacho cheese flavor.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3.99,
    category: "food"
  },
  {
    title: "Coca-Cola Classic",
    description: "Refreshing soft drink with a classic cola flavor.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1473360526459-100c8e8ec8d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1.49,
    category: "food"
  },
  {
    title: "Kellogg's Corn Flakes Cereal",
    description: "Crispy and golden corn flakes for a nutritious breakfast.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1616662707621-9c00d8fb7d5f?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2.99,
    category: "food"
  },
  {
    title: "Pepsi 12-Pack Cans",
    description: "12-pack of Pepsi soda cans for a refreshing treat.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1629278288988-e2ad25024695?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5.99,
    category: "food"
  },
  {
    title: "Hershey's Milk Chocolate Bar",
    description: "Smooth and creamy milk chocolate bar for a sweet indulgence.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1522249341405-3871994ac062?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1.49,
    category: "food"
  },
  {
    title: "Lay's Classic Potato Chips",
    description: "Crispy and salty potato chips, perfect for snacking.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1604565011092-c0fa4416f80f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3.49,
    category: "food"
  },
  {
    title: "Campbell's Tomato Soup",
    description: "Classic tomato soup made with vine-ripened tomatoes.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1629978448078-c94a0ab6500f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1.99,
    category: "food"
  },
  {
    title: "Ben & Jerry's Chocolate Fudge Brownie Ice Cream",
    description: "Rich chocolate ice cream with fudge brownies for a decadent treat.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1630301786766-70c27110f563?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4.99,
    category: "food"
  },
  {
    title: "Oscar Mayer Bacon",
    description: "Thick-cut bacon with a savory and smoky flavor.",
    image: {
      filename: "productImage",
      url: "https://example.com/oscarbacon.jpg",
    },
    price: 5.49,
    category: "food"
  },
  {
    title: "Tropicana Orange Juice",
    description: "100% pure and natural orange juice with no added sugar.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1650460069032-3c410224fe55?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3.99,
    category: "food"
  },
  {
    title: "Quaker Oats Old Fashioned Oatmeal",
    description: "Heart-healthy whole grain oats for a nutritious breakfast.",
    image: {
      filename: "productImage",
      url: "https://images.unsplash.com/photo-1431536037963-5c282b753c25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2.99,
    category: "food"
  }
];
module.exports = { data: sampleProducts };