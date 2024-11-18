import React from 'react';

function CartSummary({ cart, onLogout }) {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="w-2/5 bg-card p-6 rounded-lg shadow-lg h-[70vh] sticky top-4">
      <h2 className="text-2xl font-bold mb-4">Resumo do Carrinho</h2>
      <ul className="space-y-2">
        {cart.map((product) => (
          <li key={product.id} className="flex justify-between">
            <span>{product.name} (x{product.quantity})</span>
            <span>R$ {(product.price * product.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-xl font-semibold">
        Total: R$ {total.toFixed(2)}
      </div>
      <button
        onClick={onLogout}
        className="mt-6 bg-button text-white px-4 py-2 rounded-full w-full"
      >
        Finalizar e Sair
      </button>
    </div>
  );
}

export default CartSummary;
