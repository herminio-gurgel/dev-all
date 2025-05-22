import ApplicationBrand from "./partials/ApplicationBrand";
import BurgerMenu from "./partials/BurgerMenu";
import NavigationLinks from "./partials/NavigationLinks";
import ThemeToggle from "./partials/ThemeToggle";
import Themes from "../../types/Themes";
import { useState } from "react";

interface Props {
  theme: Themes;
  toggleTheme: () => void;
}

const NavBar = ({ theme, toggleTheme }: Props) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand title my-0">
            <ApplicationBrand />
            <BurgerMenu
              menuActive={menuActive}
              onClick={() => {
                setMenuActive(!menuActive);
              }}
            />
          </div>
          <div
            className={`navbar-menu ${menuActive ? "is-active has-text-right" : ""}`}
          >
            <div className="navbar-start">
              <NavigationLinks />
            </div>
            <div className="navbar-end">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
