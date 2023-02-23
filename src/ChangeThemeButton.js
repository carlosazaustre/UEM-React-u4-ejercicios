import { useThemeContext } from "./ThemeContext";
import { useLanguageContext } from "./LanguageContext";

export function ChangeThemeButton() {
  const { toggleTheme } = useThemeContext();
  const { language } = useLanguageContext();

  let text;
  if (language === "en") {
    text = "Change theme";
  } else if (language === "es") {
    text = "Cambiar tema";
  } else if (language === "uk") {
    text = "Змінити тему";
  }

  return <button onClick={toggleTheme}>{text}</button>;
}
