import Themes from "../../../types/Themes";
import NavigationLinks from "../partials/NavigationLinks";
import ThemeToggle from "../partials/ThemeToggle";

interface Props {
  theme: Themes;
  toggleTheme: () => void;
  menuActive: boolean;
}

const NavigationMenu = ({ theme, toggleTheme, menuActive }: Props) => {
  return (
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
  );
};

export default NavigationMenu;
