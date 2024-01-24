import logo from "../src/assets/logo.svg";
import ring from "../src/assets/ring.svg";
import moon from "../src/assets/icons/moon.svg";
import shopping from "../src/assets/shopping-cart.svg";
import { useState } from "react";
import CartDetails from "./cine/cartDetails";

const Header = () => {
  const [showcart, setShowcart] = useState(false);
  const handleShowCart = () => {
    setShowcart(true);
    
  };
  return (
    <header>
      {showcart && <CartDetails  onClose={()=>setShowcart(false)}/>}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              onClick={handleShowCart}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shopping} width="24" height="24" alt="cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
