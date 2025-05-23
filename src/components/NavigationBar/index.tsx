import ApplicationBrand from "./partials/ApplicationBrand";
import BurgerMenu from "./partials/BurgerMenu";
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
          <div className="navbar-brand title my-0">
            <ApplicationBrand />
            <BurgerMenu menuActive={menuActive} toogleMenu={toogleMenu} />
          </div>
          <NavigationMenu menuActive={menuActive} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
