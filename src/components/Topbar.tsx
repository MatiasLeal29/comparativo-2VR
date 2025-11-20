import { useTheme } from "../context/ThemeContext";

interface Props {
  active: "perfil" | "comparativa" | "resultados";
  onTabChange: (t: "perfil" | "comparativa" | "resultados") => void;
}

export const Topbar = ({ active, onTabChange }: Props) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar-row">
        <div className="logo">📊 Dashboard Electoral 2025</div>

        <button className="theme-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <nav className="menu-under-title">
        <button
          className={`tab-btn ${active === "perfil" ? "active" : ""}`}
          onClick={() => onTabChange("perfil")}
        >
          Perfil
        </button>

        <button
          className={`tab-btn ${active === "comparativa" ? "active" : ""}`}
          onClick={() => onTabChange("comparativa")}
        >
          Comparativa
        </button>

        <button
          className={`tab-btn ${active === "resultados" ? "active" : ""}`}
          onClick={() => onTabChange("resultados")}
        >
          Resultados
        </button>
      </nav>
    </header>
  );
};
