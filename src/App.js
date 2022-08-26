import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

const localStorageTheme = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};
function App() {
  const [theme, setTheme] = useState(localStorageTheme());
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);
  },[theme]);
  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={cambiaTema}>
          Cambia
        </button>
        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}{" "}
          {/*Con lo spread operator (...el) diciamo di utilizzare tutti gli elementi dell'oggetto*/}
        </section>
      </div>
    </section>
  );
}

export default App;
