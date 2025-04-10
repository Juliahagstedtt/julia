// MakeupProducts.jsx
import React, { useState } from 'react'

function MakeupProducts() {
  const [products, setProducts] = useState([]);

  // 1. Funktion som hämtar produkter
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
      );
      const data = await response.json();
      setProducts(data.slice(0, 2)); // Visa bara 5 produkter
    } catch (error) {
      console.error('Något gick fel:', error)
    }
  }

  return (
    <div>
      <h1>Sminkprodukter</h1>
      {/* 2. Knapp som hämtar data */}
      <button onClick={fetchProducts}>Hämta produkter</button>

      {/* 3. Visa produkterna */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price} kr</p>
            <img src={product.image_link} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MakeupProducts