import { useState } from "react";

import SideMenu from "./components/SideMenu";
import "./styles/Styles.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <SideMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className={`right ${isDarkMode ? "dark-mode" : ""}`}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam rem
          eveniet quis voluptate rerum veniam magnam aspernatur! Voluptatum
          voluptate labore culpa amet, id debitis sunt quisquam, officia aliquam
          dolorem aliquid?
        </p>
      </div>
    </div>
  );
}

export default App;
