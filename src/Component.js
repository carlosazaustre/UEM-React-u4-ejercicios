import { useThemeContext } from "./ThemeContext";
import { useLanguageContext } from "./LanguageContext";
import { useFontSizeContext } from "./FontSizeContext";
import { useAuthContext } from "./AuthContext";
import { ChangeThemeButton } from "./ChangeThemeButton";
import { ChangeLanguageSelect } from "./ChangeLanguageSelect";
import "./Component.css";

export function Component() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const { fontSize, toggleFontSize } = useFontSizeContext();
  const { auth, updateUsername } = useAuthContext();

  let title;
  let text;
  let textFontSize;

  if (language === "en") {
    title = "Header";
    text = "Theme";
    textFontSize = "Change Font";
  } else if (language === "es") {
    title = "Cabecera";
    text = "Tema";
    textFontSize = "Cambiar Fuente";
  } else if (language === "uk") {
    title = "Заголовок";
    text = "Тема";
    textFontSize = "Smiriv Font";
  }

  return (
    <div className={`font-${fontSize}`}>
      <div className={`app-${theme}`}>
        <h1>
          {title} - {auth.username}
        </h1>
        <input
          type="text"
          onChange={(event) => updateUsername(event.target.value)}
        />
        <p>
          {text}: {theme}
        </p>
        <ChangeThemeButton />
        <ChangeLanguageSelect />
        <button onClick={toggleFontSize}>{textFontSize}</button>
      </div>
    </div>
  );
}
