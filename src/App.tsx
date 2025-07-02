import "./App.css";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listarcategorias/ListaCategoria";

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
      <BrowserRouter>
        <div className="md:relative">
          <Navbar
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}
          />
        </div>
        <div className="flex-1 bg-slate-100 min-h-[calc(100vh-128px)] flex flex-col justify-center items-center py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <div className={`${shouldShowFooter() ? "block" : "hidden"} md:static`}>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
