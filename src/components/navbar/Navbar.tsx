import {
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useRef } from "react";
import logo from "../../assets/imgs/farmacia.png";
import { Link } from "react-router-dom";

type MenuState = "closed" | "open";

interface NavbarProps {
  menuState: MenuState;
  onMenuToggle: () => void;
  onMenuClose: () => void;
}

function Navbar({
  menuState,
  onMenuToggle,
  onMenuClose,
}: Readonly<NavbarProps>) {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = (): void => {
    onMenuToggle();
  };

  const handleMenuClose = (): void => {
    onMenuClose();
  };

  return (
    <>
      <div className="fixed md:relative top-0 left-0 z-50 w-full bg-green-500 text-white flex justify-center py-4 md:py-2">
        <div className="container mx-6 mt-2 md:mt-0 flex items-center justify-between text-lg">
          <Link to="/home" className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 md:w-24" />
            <span className="hidden md:inline text-3xl font-bold">
              Farmácia
            </span>
          </Link>
          <div className="relative flex w-2/5 items-center justify-center text-black max-md:hidden">
            <form className="flex w-full items-center justify-center">
              <input
                className="h-9 w-10/12 rounded-lg bg-white px-4 py-4 focus:outline-none"
                type="search"
                placeholder="Pesquisar produto"
                id="busca"
                name="busca"
                required
              />
              <button
                type="submit"
                className="ms-2 h-9 w-9 rounded-lg border border-teal-700 bg-teal-500 p-2.5 text-sm font-medium text-white hover:bg-teal-900"
              >
                <MagnifyingGlassIcon size={14} weight="bold" />
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center gap-4 py-4">
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadcategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <UserIcon size={32} weight="bold" />
            <ShoppingCartIcon size={32} weight="bold" />
          </div>
          {menuState === "closed" && (
            <button
              className="p-2 md:hidden cursor-pointer"
              onClick={handleMenuToggle}
              aria-label="Abrir menu"
            >
              <ListIcon size={32} weight="bold" />
            </button>
          )}
        </div>
      </div>
      {menuState === "open" && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 z-50 h-full w-full bg-green-400 bg-opacity-95 md:hidden transition-all duration-300 ease-in-out animate-fade-in animate-slide-in"
          style={{ animation: "fade-in 0.3s, slide-in 0.3s" }}
        >
          <div className="relative flex flex-col items-start justify-start gap-2 p-6 text-left text-lg text-white">
            <div className="flex w-full items-center justify-between mb-2">
              <img src={logo} alt="Logo" className="w-20 md:w-60" />
              <button
                type="button"
                aria-label="Fechar menu"
                className="text-white hover:text-gray-300 mr-2 cursor-pointer"
                onClick={handleMenuClose}
              >
                <XIcon size={32} weight="bold" />
              </button>
            </div>
            <form className="mb-4 flex w-full items-center">
              <input
                className="h-9 w-10/12 rounded-lg bg-white px-4 py-4 text-black focus:outline-none"
                type="search"
                placeholder="Pesquisar produto"
                id="busca-mobile"
                name="busca-mobile"
                required
              />
              <button
                type="submit"
                className="ms-2 h-9 w-9 rounded-lg border border-teal-700 bg-teal-500 p-2.5 text-sm font-medium text-white hover:bg-teal-900"
              >
                <MagnifyingGlassIcon
                  size={14}
                  weight="bold"
                  className="text-white"
                />
              </button>
            </form>
            <Link
              to="/home"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/categorias"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Categorias
            </Link>
            <Link
              to="/cadcategoria"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Cadastrar Categoria
            </Link>
            <div className="mt-4 flex gap-4">
              <Link to="#" onClick={handleMenuClose}>
                <UserIcon size={32} weight="bold" className="text-white" />
              </Link>
              <Link to="#" onClick={handleMenuClose}>
                <ShoppingCartIcon
                  size={32}
                  weight="bold"
                  className="text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
