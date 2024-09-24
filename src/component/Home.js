import React from "react";
import { useTheme } from "./ThemeContext";
const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  console.log(isDarkTheme);
  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#000000" : "#ffffff",
        height: "300px",
        width: "300px",
        border: "1px solid red",
      }}
    >
      <button onClick={toggleTheme}>
        Dark Mode {isDarkTheme ? "Dark" : "Light"}
      </button>
    </div>
  );
};
export default Home;
