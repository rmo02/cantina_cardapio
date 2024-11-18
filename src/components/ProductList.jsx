import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ cart, setCart }) {
  const products = [
    { id: 1, name: 'Produto 1', price: 10.0 },
    { id: 2, name: 'Produto 2', price: 20.0 },
    { id: 3, name: 'Produto 3', price: 30.0 },
    { id: 4, name: 'Produto 4', price: 30.0 },
    { id: 5, name: 'Produto 5', price: 30.0 },
    { id: 6, name: 'Produto 6', price: 30.0 },
    { id: 7, name: 'Produto 7', price: 30.0 },
    { id: 8, name: 'Produto 8', price: 30.0 },
    { id: 9, name: 'Produto 9', price: 30.0 },
    { id: 10, name: 'Produto 10', price: 30.0 },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((product) => product.id !== productId));
    }
  };

  return (
    <div className="w-3/5 bg-background p-4 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="h-[70vh] overflow-y-auto pr-2">
        <div className="grid gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => handleAddToCart(product)}
              onRemove={() => handleRemoveFromCart(product.id)}
              quantity={
                cart.find((item) => item.id === product.id)?.quantity || 0
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
