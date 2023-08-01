import React, { useState } from 'react';
import './App.css';

const productsData = {
  bags: [
    {
      id: 1,
      name: "Classic Leather Bag",
      description: "High-quality leather bag with multiple compartments.",
      price: 89.99,
      discountPrice: null,
      rating: 4.5,
      imageUrl: "path/to/image1.jpg",
      color: "Black",
    },
    // Add more products for the "Bags" category
    // Product 2
    {
      id: 2,
      name: "Stylish Tote Bag",
      description: "Fashionable tote bag made from eco-friendly materials.",
      price: 74.99,
      discountPrice: 59.99,
      rating: 4.2,
      imageUrl: "path/to/image2.jpg",
      color: "Gray",
    },
    // Product 3
    {
      id: 3,
      name: "Sports Duffel Bag",
      description: "Spacious duffel bag for gym and sports activities.",
      price: 49.99,
      discountPrice: null,
      rating: 4.0,
      imageUrl: "path/to/image3.jpg",
      color: "Blue",
    },
    // Product 4
    {
      id: 4,
      name: "Stylish Shoulder Bag",
      description: "Elegant shoulder bag for any occasion.",
      price: 79.99,
      discountPrice: null,
      rating: 4.7,
      imageUrl: "path/to/image4.jpg",
      color: "Brown",
    },
    // Product 5
    {
      id: 5,
      name: "Casual Backpack",
      description: "Durable and versatile backpack for daily use.",
      price: 49.99,
      discountPrice: null,
      rating: 4.5,
      imageUrl: "path/to/image5.jpg",
      color: "Green",
    },
    // Product 6
    {
      id: 6,
      name: "Chic Clutch",
      description: "Stylish clutch for evenings and special occasions.",
      price: 39.99,
      discountPrice: null,
      rating: 4.3,
      imageUrl: "path/to/image6.jpg",
      color: "Silver",
    },
    // Product 7
    {
      id: 7,
      name: "Rugged Messenger Bag",
      description: "Durable messenger bag for carrying essentials.",
      price: 64.99,
      discountPrice: 49.99,
      rating: 4.1,
      imageUrl: "path/to/image7.jpg",
      color: "Black",
    },
    // Product 8
    {
      id: 8,
      name: "Trendy Satchel",
      description: "Trendy satchel with a modern design.",
      price: 54.99,
      discountPrice: null,
      rating: 4.6,
      imageUrl: "path/to/image8.jpg",
      color: "Brown",
    },
    // Product 9
    {
      id: 9,
      name: "Elegant Clutch",
      description: "Elegant clutch for special occasions.",
      price: 59.99,
      discountPrice: null,
      rating: 4.4,
      imageUrl: "path/to/image9.jpg",
      color: "Gold",
    },
    // Product 10
    {
      id: 10,
      name: "Sleek Laptop Bag",
      description: "Sleek laptop bag for professionals.",
      price: 69.99,
      discountPrice: null,
      rating: 4.0,
      imageUrl: "path/to/image10.jpg",
      color: "Gray",
    },
    // Product 11
    {
      id: 11,
      name: "Fashionable Tote",
      description: "Fashionable tote bag with trendy prints.",
      price: 44.99,
      discountPrice: null,
      rating: 4.8,
      imageUrl: "path/to/image11.jpg",
      color: "Pink",
    },
    // Product 12
    {
      id: 12,
      name: "Sturdy Travel Backpack",
      description: "Sturdy backpack for travel enthusiasts.",
      price: 79.99,
      discountPrice: null,
      rating: 4.5,
      imageUrl: "path/to/image12.jpg",
      color: "Black",
    },
    // Product 13
    {
      id: 13,
      name: "Leather Handbag",
      description: "Classic leather handbag for a timeless look.",
      price: 99.99,
      discountPrice: null,
      rating: 4.7,
      imageUrl: "path/to/image13.jpg",
      color: "Brown",
    },
    // Product 14
    {
      id: 14,
      name: "Sling Crossbody Bag",
      description: "Convenient sling crossbody bag for everyday use.",
      price: 34.99,
      discountPrice: null,
      rating: 4.2,
      imageUrl: "path/to/image14.jpg",
      color: "Gray",
    },
    // Product 15
    {
      id: 15,
      name: "Sophisticated Briefcase",
      description: "Sophisticated briefcase for professionals.",
      price: 89.99,
      discountPrice: 74.99,
      rating: 4.9,
      imageUrl: "path/to/image15.jpg",
      color: "Black",
    },
    // Product 16
    {
      id: 16,
      name: "Chic Satchel",
      description: "Chic satchel with a modern touch.",
      price: 49.99,
      discountPrice: null,
      rating: 4.3,
      imageUrl: "path/to/image16.jpg",
      color: "Red",
    },
    // Product 17
    {
      id: 17,
      name: "Canvas Backpack",
      description: "Durable canvas backpack for outdoor adventures.",
      price: 54.99,
      discountPrice: null,
      rating: 4.1,
      imageUrl: "path/to/image17.jpg",
      color: "Green",
    },
    // Product 18
    {
      id: 18,
      name: "Stylish Sling Bag",
      description: "Stylish sling bag for a trendy look.",
      price: 39.99,
      discountPrice: null,
      rating: 4.6,
      imageUrl: "path/to/image18.jpg",
      color: "Blue",
    },
  ],
  // ... Rest of the categories
};


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('bags');
  const [filteredProducts, setFilteredProducts] = useState(productsData[selectedCategory].slice(0, 8));
  const [loadMoreEnabled, setLoadMoreEnabled] = useState(true);
  const [colorFilter, setColorFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(productsData[category].slice(0, 8));
    setLoadMoreEnabled(true);
    setColorFilter('');
    setMinPrice('');
    setMaxPrice('');
  };

  const handleLoadMore = () => {
    const currentProductCount = filteredProducts.length;
    const nextProducts = productsData[selectedCategory].slice(currentProductCount, currentProductCount + 8);
    if (nextProducts.length === 0) {
      setLoadMoreEnabled(false);
    }
    setFilteredProducts([...filteredProducts, ...nextProducts]);
  };

  const handleColorFilterChange = (color) => {
    setColorFilter(color);
    applyFilters(selectedCategory, color, minPrice, maxPrice);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    applyFilters(selectedCategory, colorFilter, event.target.value, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    applyFilters(selectedCategory, colorFilter, minPrice, event.target.value);
  };

  const applyFilters = (category, color, minPrice, maxPrice) => {
    let filteredProducts = productsData[category];

    if (color) {
      filteredProducts = filteredProducts.filter(product => product.color === color);
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    setFilteredProducts(filteredProducts.slice(0, 8));
    setLoadMoreEnabled(true);
  };

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    let sortedProducts = [...productsData[selectedCategory]];

    switch (sortType) {
      case 'az':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceLow':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts.slice(0, 8));
    setLoadMoreEnabled(true);
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li className={selectedCategory === 'bags' ? 'active' : ''} onClick={() => handleCategoryChange('bags')}>Bags</li>
            <li className={selectedCategory === 'shoes' ? 'active' : ''} onClick={() => handleCategoryChange('shoes')}>Shoes</li>
          </ul>
        </nav>
      </header>

      {/* Product Filters */}
      <section className="product-filters">
        <h2>Filters</h2>
        <div className="color-filter">
          <h3>Color</h3>
          <ul>
            <li onClick={() => handleColorFilterChange('')}>All</li>
            <li className={colorFilter === 'Black' ? 'active' : ''} onClick={() => handleColorFilterChange('Black')}>Black</li>
            {/* Add more color options */}
          </ul>
        </div>
        <div className="price-filter">
          <h3>Price</h3>
          <div>
            <input type="number" placeholder="Min" value={minPrice} onChange={handleMinPriceChange} />
            <span>-</span>
            <input type="number" placeholder="Max" value={maxPrice} onChange={handleMaxPriceChange} />
          </div>
        </div>
      </section>

      {/* Sorting Dropdown */}
      <section className="sorting">
        <h2>Sort By</h2>
        <select onChange={handleSortChange}>
          <option value="az">Alphabetical (A-Z)</option>
          <option value="za">Alphabetical (Z-A)</option>
          <option value="priceLow">Price (Low to High)</option>
          <option value="priceHigh">Price (High to Low)</option>
        </select>
      </section>

      {/* Product Grid */}
      <section className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-tile">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.discountPrice ? <span className="discount-price">${product.price}</span> : `$${product.price}`}</p>
            <p className="ratings">Ratings: {product.rating} stars</p>
            <button onClick={() => alert('Product added to cart')}>Add to Cart</button>
          </div>
        ))}
      </section>

      {/* Load More */}
      {loadMoreEnabled && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      {/* Footer */}
      <footer>
        <ul>
          <li>T&amp;C</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;