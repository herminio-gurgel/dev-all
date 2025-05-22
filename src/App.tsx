import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Themes from "./types/Themes";

const App = () => {
  const [theme, setTheme] = useState<Themes>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div data-theme={theme}>
      <NavigationBar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
