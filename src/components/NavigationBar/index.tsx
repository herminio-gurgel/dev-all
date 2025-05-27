import NavigationBrand from "./partials/NavigationBrand";
import { useState } from "react";
import NavigationMenu from "./partials/NavigationMenu";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="navbar has-shadow">
        <div className="container">
          <NavigationBrand menuActive={menuActive} toggleMenu={toggleMenu} />
          <NavigationMenu menuActive={menuActive} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
