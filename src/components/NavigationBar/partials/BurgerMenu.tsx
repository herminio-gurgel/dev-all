interface Props {
  menuActive: boolean;
  toogleMenu: () => void;
}

const BurgerMenu = ({ menuActive, toogleMenu }: Props) => {
  return (
    <>
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
    </>
  );
};

export default BurgerMenu;
