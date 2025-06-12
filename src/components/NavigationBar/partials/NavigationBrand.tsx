import { Link } from "react-router-dom";

interface Props {
  menuActive: boolean;
  toggleMenu: () => void;
}

const NavigationBrand = ({ menuActive, toggleMenu }: Props) => {
  return (
    <div className="navbar-brand title my-0">
      <Link to="/" className="navbar-item is-block">
        <span className="has-text-danger">/</span>dev/All
      </Link>
      <a
        className={`navbar-burger has-text-text ${menuActive ? "is-active" : ""}`}
        role="button"
        aria-label="menu"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

export default NavigationBrand;
