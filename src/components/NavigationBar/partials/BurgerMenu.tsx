interface Props {
  onClick: () => void;
  menuActive: boolean;
}

const BurgerMenu = ({ onClick, menuActive }: Props) => {
  return (
    <>
      <a
        className={`navbar-burger has-text-text ${menuActive ? "is-active" : ""}`}
        role="button"
        aria-label="menu"
        aria-expanded="false"
        onClick={onClick}
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
