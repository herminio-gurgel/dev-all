import { useEffect, useRef } from "react";
import styled from "styled-components";
import NavigationLinks from "../partials/NavigationLinks";
import ThemeToggle from "../partials/ThemeToggle";

const NavbarMenu = styled.div`
  @media (max-width: 1023px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 1000;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
    transition:
      max-height 0.3s ease,
      opacity 0.2s ease,
      transform 0.2s ease;
    display: block !important;

    &.is-active {
      max-height: 500px;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface Props {
  menuActive: boolean;
  toogleMenu: () => void;
}

const NavigationMenu = ({ menuActive, toogleMenu }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !document.querySelector(".navbar-burger")?.contains(target)
      ) {
        if (menuActive) {
          toogleMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive, toogleMenu]);

  return (
    <NavbarMenu
      ref={menuRef}
      className={`navbar-menu has-text-right py-0 ${menuActive ? "is-active" : ""}`}
    >
      <NavigationLinks />
      <ThemeToggle />
    </NavbarMenu>
  );
};

export default NavigationMenu;
