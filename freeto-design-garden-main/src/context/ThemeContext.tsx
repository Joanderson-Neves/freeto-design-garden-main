
import React, { createContext, useState, useContext, useEffect } from "react";

// Define types for the theme context
type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  fontPairing: FontPairingType;
  setFontPairing: (fontPairing: FontPairingType) => void;
  applyTheme: () => void;
};

type ThemeType = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
};

type FontPairingType = {
  name: string;
  display: string;
  body: string;
};

// Default theme and font values
const defaultTheme: ThemeType = {
  name: "Default Purple",
  primary: "262 83% 74%",
  secondary: "240 5.9% 10%",
  accent: "240 4.8% 95.9%",
  background: "0 0% 100%",
  foreground: "240 10% 3.9%",
};

const defaultFontPairing: FontPairingType = {
  name: "Default",
  display: "SF Pro Display, Inter, sans-serif",
  body: "Inter, sans-serif",
};

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
  fontPairing: defaultFontPairing,
  setFontPairing: () => {},
  applyTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for theme and fonts
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);
  const [fontPairing, setFontPairing] = useState<FontPairingType>(defaultFontPairing);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Load saved theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("freetoTheme");
    const savedFontPairing = localStorage.getItem("freetoFontPairing");
    const savedDarkMode = localStorage.getItem("freetoDarkMode");

    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
    if (savedFontPairing) {
      setFontPairing(JSON.parse(savedFontPairing));
    }
    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Apply the theme immediately on load
    applyThemeToDOM(
      savedTheme ? JSON.parse(savedTheme) : defaultTheme,
      savedFontPairing ? JSON.parse(savedFontPairing) : defaultFontPairing,
      savedDarkMode === "true"
    );
  }, []);

  // Function to apply theme changes to DOM
  const applyThemeToDOM = (
    currentTheme: ThemeType, 
    currentFontPairing: FontPairingType,
    isDarkMode: boolean
  ) => {
    // Apply colors
    const root = document.documentElement;
    
    // Set primary colors
    root.style.setProperty("--primary", currentTheme.primary);
    root.style.setProperty("--secondary", currentTheme.secondary);
    root.style.setProperty("--accent", currentTheme.accent);
    
    if (!isDarkMode) {
      // Light mode specific
      root.style.setProperty("--background", currentTheme.background);
      root.style.setProperty("--foreground", currentTheme.foreground);
    }
    
    // Apply fonts
    // Create a style element for the fonts if it doesn't already exist
    let fontStyle = document.getElementById("custom-font-style");
    if (!fontStyle) {
      fontStyle = document.createElement("style");
      fontStyle.id = "custom-font-style";
      document.head.appendChild(fontStyle);
    }
    
    // Update the style element with new font definitions
    fontStyle.innerHTML = `
      body {
        font-family: ${currentFontPairing.body};
      }
      .font-display {
        font-family: ${currentFontPairing.display};
      }
    `;
    
    // Save to localStorage
    localStorage.setItem("freetoTheme", JSON.stringify(currentTheme));
    localStorage.setItem("freetoFontPairing", JSON.stringify(currentFontPairing));
    localStorage.setItem("freetoDarkMode", isDarkMode.toString());
  };

  // Function to apply theme changes
  const applyTheme = () => {
    applyThemeToDOM(theme, fontPairing, darkMode);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("freetoDarkMode", newDarkMode.toString());
  };

  // Value for the context provider
  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    fontPairing,
    setFontPairing,
    applyTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
