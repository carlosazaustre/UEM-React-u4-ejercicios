import { useLanguageContext } from "./LanguageContext";

export function ChangeLanguageSelect() {
  const { selectLanguage } = useLanguageContext();

  return (
    <select onChange={(event) => selectLanguage(event.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="uk">Ucraniano</option>
    </select>
  );
}
