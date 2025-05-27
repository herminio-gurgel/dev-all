import NavigationBrand from "./partials/NavigationBrand";
import { useState } from "react";
import NavigationMenu from "./partials/NavigationMenu";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toogleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="navbar has-shadow">
        <div className="container">
          <NavigationBrand menuActive={menuActive} toogleMenu={toogleMenu} />
          <NavigationMenu menuActive={menuActive} toogleMenu={toogleMenu} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
