import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Themes from "../../../types/Themes";

const Button = styled.button`
  border: none;
  box-shadow: none;
`;

const NavBarItem = styled.div<{ $isDark: boolean }>`
  :hover {
    background-color: ${({ $isDark }) => ($isDark ? "#e6dbfa" : "#fff7c2")};
  }
`;

interface Props {
  theme: Themes;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: Props) => {
  const isDark = theme === "dark";

  return (
    <NavBarItem $isDark={isDark} className="navbar-item">
      <Button className="button" onClick={toggleTheme}>
        <FontAwesomeIcon
          className="icon"
          icon={isDark ? faMoon : faSun}
          style={{ color: isDark ? "#B197FC" : "#FFD43B" }}
        />
      </Button>
    </NavBarItem>
  );
};

export default ThemeToggle;
