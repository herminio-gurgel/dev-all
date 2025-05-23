import NavigationLinks from "../partials/NavigationLinks";
import ThemeToggle from "../partials/ThemeToggle";

interface Props {
  menuActive: boolean;
}

const NavigationMenu = ({ menuActive }: Props) => {
  return (
    <div
      className={`navbar-menu ${menuActive ? "is-active has-text-right" : ""}`}
    >
      <div className="navbar-start">
        <NavigationLinks />
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavigationMenu;
