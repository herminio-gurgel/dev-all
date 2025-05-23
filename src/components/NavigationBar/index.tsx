import ApplicationBrand from "./partials/ApplicationBrand";
import BurgerMenu from "./partials/BurgerMenu";
import Themes from "../../types/Themes";
import { useState } from "react";
import NavigationMenu from "./partials/NavigationMenu";

interface Props {
  theme: Themes;
  toggleTheme: () => void;
}

const NavBar = ({ theme, toggleTheme }: Props) => {
  const [menuActive, setMenuActive] = useState(false);

  const toogleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand title my-0">
            <ApplicationBrand />
            <BurgerMenu menuActive={menuActive} toogleMenu={toogleMenu} />
          </div>
          <NavigationMenu
            theme={theme}
            toggleTheme={toggleTheme}
            menuActive={menuActive}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
