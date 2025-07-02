import "./App.css";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

type MenuState = "closed" | "open";

function App() {
  const [menuState, setMenuState] = useState<MenuState>("closed");

  const toggleMenu = (): void => {
    setMenuState((prevState) => (prevState === "closed" ? "open" : "closed"));
  };

  const closeMenu = (): void => {
    setMenuState("closed");
  };

  const shouldShowFooter = (): boolean => menuState === "closed";

  return (
    <>
      <div className="md:relative">
        <Navbar
          menuState={menuState}
          onMenuToggle={toggleMenu}
          onMenuClose={closeMenu}
        />
      </div>
      <Home />
      <div className={`${shouldShowFooter() ? "block" : "hidden"} md:static`}>
        <Footer />
      </div>
    </>
  );
}

export default App;
