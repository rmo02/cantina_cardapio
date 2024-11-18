import React from 'react';

function ProductCard({ product, onAdd, onRemove, quantity }) {
  return (
    <div className="bg-card p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
        {quantity > 0 && (
          <p className="text-sm text-gray-500">Quantidade: {quantity}</p>
        )}
      </div>
      <div className="flex gap-2">
        <button className="bg-button text-white px-3 py-1 rounded-full" onClick={onAdd}>
          +
        </button>
        <button className="bg-button text-white px-3 py-1 rounded-full" onClick={onRemove}>
          -
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
