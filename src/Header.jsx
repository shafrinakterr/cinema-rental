import logo from "../src/assets/logo.svg";
import ring from "../src/assets/ring.svg";
import moon from "../src/assets/icons/moon.svg";
import sun from "../src/assets/icons/sun.svg";
import shopping from "../src/assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/cartDetails";
import { MovieContext, ThemeContext } from "./context";

const Header = () => {
  const [showcart, setShowcart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const {darkMode, setDarkMode}= useContext(ThemeContext)
  const handleShowCart = () => {
    setShowcart(true);
  };
  return (
    <header>
      {showcart && <CartDetails onClose={() => setShowcart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a onClick={()=>setDarkMode(darkMode=> !darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode? sun :  moon} width="24" height="24" alt="moon" />
            </a>
          </li>
          <li>
            <a
              onClick={handleShowCart}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shopping} width="24" height="24" alt="cart" />
              {
                cartData.length > 0 && 
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">{cartData.length}</span>
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
