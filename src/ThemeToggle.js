import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-secondary">
      {isDarkTheme ? "Light Theme" : "Dark Theme"}
    </button>
  );
}

export default ThemeToggle;
