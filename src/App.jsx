import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          {/* Sub Question 1: Company Name */}
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your journey to a greener home starts here.</p>
          {/* Sub Question 2: Get Started Button */}
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
