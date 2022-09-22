import Cart from "./components/Cart/Cart";
import { useState } from "react"; // providing the feature that could track state in the app
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCardHandler() {
    setCartIsShown = true;
  }
  function hideCartHandler() {
    setCartIsShown = false;
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
