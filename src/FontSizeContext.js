import { createContext, useContext, useState } from "react";

const FontSizeContext = createContext();

export function useFontSizeContext() {
  return useContext(FontSizeContext);
}

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState(16);

  const toggleFontSize = () => {
    setFontSize(fontSize === 16 ? 24 : 16);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, toggleFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
