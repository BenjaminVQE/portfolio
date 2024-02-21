import { useEffect, useState } from "react";
import MenuBurger from "../menuBurger/menuBurger";
import "./header.css";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsFixed(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`portfolioHeader ${isFixed ? "fixed" : ""}`}>
        <nav>
          <div className="logo">BV</div>
          <MenuBurger />
        </nav>
      </header>
    </>
  );
}

export default Header;
