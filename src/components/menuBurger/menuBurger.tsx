import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./menuBurger.css";
import RightNavBar from "./rightNavBar";

function MenuBurger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="menu">
      <MdMenu size={50} color="#31304D" onClick={toggleMenu} />
      <RightNavBar isOpen={menuOpen} />
    </div>
  );
}

export default MenuBurger;
