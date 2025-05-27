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
  const storedTheme = localStorage.getItem("dev/all-theme");
  const initialTheme = storedTheme
    ? storedTheme === "dark"
    : document.documentElement.getAttribute("data-theme") === "dark";
  const [isDark, setIsDark] = useState(initialTheme);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dev/all-theme", theme);
  }, [isDark]);

  function handleToggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <div className="navbar-end">
      <NavBarItem $isDark={isDark} className="navbar-item">
        <Button className="button" onClick={handleToggleTheme}>
          <FontAwesomeIcon
            className="icon"
            icon={isDark ? faMoon : faSun}
            style={{ color: isDark ? "#B197FC" : "#FFD43B" }}
          />
        </Button>
      </NavBarItem>
    </div>
  );
};

export default ThemeToggle;
