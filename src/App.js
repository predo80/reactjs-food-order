import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const[CartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {CartIsShown && <div>Cart ...</div>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
