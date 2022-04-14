import { createContext, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import Switch from "react-switch";
import Login from "./components/Login";
import GlobalStyle from "./styles/global";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container__page" id={theme}>
        <Login />

        <div className="switch">
          <span onClick={toggleTheme}>
            {theme !== "dark" ? <BsFillMoonFill /> : <BsSun />}
          </span>

          <Switch
            onChange={toggleTheme}
            checked={theme === "dark"}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
        <GlobalStyle />

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
