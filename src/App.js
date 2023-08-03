import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './additional_images/CoutureQuest.png'; 
import './App.css';
import bagsData from './bags.json';
import shoesData from './shoes.json';



const productsData = {
  bags: bagsData ,
  shoes: shoesData
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
  // Function to generate color options dynamically based on existing product data
  const generateColorOptions = () => {
    let uniqueColors = new Set();
  
    // Extract unique colors from the product data
    productsData[selectedCategory].forEach((product) => {
      uniqueColors.add(product.color);
    });
  
    // Convert the Set back to an array and map to render the color options
    return Array.from(uniqueColors).map((color) => (
      <li
        key={color}
        onClick={() => handleColorFilterChange(color)}
        className={colorFilter === color ? 'active' : ''}
      >
        {color}
      </li>
    ));
  };
  const totalProductsCount = productsData[selectedCategory].length;
  const displayedProductsCount = filteredProducts.length;

  return (
    <div className="App">

      {/* Header */}
      <header>
      <img src={logo} alt="Logo" className="logo" /> 
        <nav>
          <ul>
            <li className={selectedCategory === 'bags' ? 'active' : ''} onClick={() => handleCategoryChange('bags')}>Bags</li>
            <li className={selectedCategory === 'shoes' ? 'active' : ''} onClick={() => handleCategoryChange('shoes')}>Shoes</li>
          </ul>
        </nav>
      </header>
      <div className="container">
      {/* Product Filters */}
      <section className="product-filters">
        <h2>Filters</h2>
        <div className="color-filter">
          <h3>Color</h3>
          <ul>
            <li onClick={() => handleColorFilterChange('')}>All</li>
            {generateColorOptions()} {/* the options are generated based on the data i put */}

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
      <div/> 

      {/* Product Counter */}
      <section className="product-counter">
              {displayedProductsCount > 0 && (
                <p>
                  {displayedProductsCount} out of {totalProductsCount} products
                </p>
              )}
            </section>

      {/* Product Grid */}
      <section className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-tile">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            {product.discountPrice ? (
    <div>
      <p className="discounted-price">${product.discountPrice}</p>
      <p className="normal-price">${product.price}</p>
    </div>
  ) : (
    <p className="price">${product.price}</p>
  )}
      <p className="ratings">Ratings: {product.rating} stars</p>
            <button onClick={() => alert('Product added to cart')}>Add to Cart</button>
          </div>
        ))}
      </section>
</div>
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