import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const selectLanguage = (value) => {
    switch (value) {
      case "en":
        setLanguage("en");
        break;
      case "es":
        setLanguage("es");
        break;
      case "uk":
        setLanguage("uk");
        break;
      default:
        setLanguage("en");
        break;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
