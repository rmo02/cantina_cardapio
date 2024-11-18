import React, { useState } from 'react';
import ModalRFID from './components/ModalRFID';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import Header from './components/Header';


function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleUserIdentification = (userId) => {
    setUser(userId);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center pt-20">
        {!user ? (
          <ModalRFID onIdentify={handleUserIdentification} />
        ) : (
          <div className="flex w-full max-w-5xl p-4 space-x-12">
            <ProductList cart={cart} setCart={setCart} />
            <CartSummary cart={cart} onLogout={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
