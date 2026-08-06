const axios = require('axios');

const API_BASE_URL = 'https://flairvigo-backend-production-9361.up.railway.app/api';

async function main() {
  try {
    // 1. Login to get admin token
    console.log('Logging in...');
    const loginRes = await axios.post(`${API_BASE_URL}/auth/login`, {
      email: 'admin@flairvigo.com.ng',
      password: 'admin@123'
    });
    
    const token = loginRes.data.data.accessToken;
    console.log('Logged in successfully.');

    // 2. Fetch all products
    console.log('Fetching products...');
    const productsRes = await axios.get(`${API_BASE_URL}/admin/products`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    const products = productsRes.data.data;
    const perfume = products.find(p => p.name.toLowerCase().includes('perfume'));
    
    if (perfume) {
      console.log(`Found perfume product: ${perfume.name} (${perfume.id})`);
      // Hide the perfume
      console.log('Hiding the perfume product...');
      try {
        await axios.put(`${API_BASE_URL}/admin/products/${perfume.id}`, {
          isFeatured: false,
          isActive: false
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Successfully hid perfume product.');
      } catch (e) {
        console.log('Could not hide perfume, continuing...', e.response?.data || e.message);
      }
    } else {
      console.log('No perfume product found.');
    }

    // 3. Create the new Onyx Black product
    console.log('Creating Onyx Black product...');
    
    // find apparel category
    const categoriesRes = await axios.get(`${API_BASE_URL}/categories`);
    const category = categoriesRes.data.data.find(c => c.name.toLowerCase().includes('apparel') || c.name.toLowerCase().includes('scrub'));
    
    const newProductRes = await axios.post(`${API_BASE_URL}/admin/products`, {
      name: "Onyx Black Classic Scrub Top",
      slug: "onyx-black-classic-scrub-top",
      description: "Experience the ultimate intersection of high-performance utility and premium editorial flair with the Onyx Black Classic Scrub Top.",
      fabricDetails: "Engineered with our proprietary FIONx™ technology. Four-way stretch, moisture-wicking, anti-wrinkle and ridiculously soft.",
      careInstructions: "Machine wash cold inside-out, tumble dry low. Do not bleach.",
      basePrice: 58000,
      categoryId: category ? category.id : categoriesRes.data.data[0].id,
      isFeatured: true,
      images: [
        {
          url: "/images/products/onyx-black/1.jpg",
          alt: "Onyx Black Scrub Top",
          order: 0,
          isMain: true
        }
      ],
      variants: [
        { sku: "ONYX-BLK-S", color: "Onyx Black", colorHex: "#111111", size: "S", priceOffset: 0, inventory: 100 },
        { sku: "ONYX-BLK-M", color: "Onyx Black", colorHex: "#111111", size: "M", priceOffset: 0, inventory: 150 },
        { sku: "ONYX-BLK-L", color: "Onyx Black", colorHex: "#111111", size: "L", priceOffset: 0, inventory: 200 },
        { sku: "ONYX-BLK-XL", color: "Onyx Black", colorHex: "#111111", size: "XL", priceOffset: 0, inventory: 80 }
      ]
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log('Successfully created Onyx Black product:', newProductRes.data.data.id);

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

main();
