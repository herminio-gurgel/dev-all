import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Button = styled.button`
  border: none;
  box-shadow: none;
`;

const NavBarItem = styled.div<{ $isDark: boolean }>`
  :hover {
    background-color: ${({ $isDark }) => ($isDark ? "#e6dbfa" : "#fff7c2")};
  }
`;

const ThemeToggle = () => {
  const initialTheme =
    document.documentElement.getAttribute("data-theme") === "dark";
  const [isDark, setIsDark] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, [isDark]);

  function handleToggleTheme() {
    setIsDark((prevState) => !prevState);
  }

  return (
    <NavBarItem $isDark={isDark} className="navbar-item">
      <Button className="button" onClick={handleToggleTheme}>
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
