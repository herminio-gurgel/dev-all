interface Props {
  menuActive: boolean;
  toogleMenu: () => void;
}

const NavigationBrand = ({ menuActive, toogleMenu }: Props) => {
  return (
    <div className="navbar-brand title my-0">
      <a href="" className="navbar-item is-block">
        <span className="has-text-danger">/</span>dev/All
      </a>
      <a
        className={`navbar-burger has-text-text ${menuActive ? "is-active" : ""}`}
        role="button"
        aria-label="menu"
        aria-expanded="false"
        onClick={toogleMenu}
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
