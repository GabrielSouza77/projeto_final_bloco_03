import {
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useRef } from "react";
import logo from "../../assets/imgs/farmacia.png";

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
          <a href="/home " className="flex items-center">
            <img src={logo} alt="Logo" className="w-20 md:w-24" />
            <span className="hidden md:inline text-3xl font-bold">
              Farmácia
            </span>
          </a>
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
            <a href="/produtos" className="hover:underline">
              Produtos
            </a>
            <a href="/categorias" className="hover:underline">
              Categorias
            </a>
            <a href="/cadcategoria" className="hover:underline">
              Cadastrar Categoria
            </a>
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
          className="fixed top-0 left-0 z-50 h-full w-full bg-slate-800 bg-opacity-95 md:hidden transition-all duration-300 ease-in-out animate-fade-in animate-slide-in"
          style={{ animation: "fade-in 0.3s, slide-in 0.3s" }}
        >
          <div className="relative flex flex-col items-start justify-start gap-2 p-6 text-left text-lg text-white">
            <div className="flex w-full items-center justify-between mb-2">
              <img
                src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
                alt="Logo"
                className="w-50 md:w-60"
              />
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
            <a
              href="/home"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="/produtos"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Produtos
            </a>
            <a
              href="/cadproduto"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Cadastrar Produto
            </a>
            <a
              href="/categorias"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Categorias
            </a>
            <a
              href="/cadcategoria"
              onClick={handleMenuClose}
              className="py-2 text-white hover:text-gray-300"
            >
              Cadastrar Categoria
            </a>
            <div className="mt-4 flex gap-4">
              <a href="#" onClick={handleMenuClose}>
                <UserIcon size={32} weight="bold" className="text-white" />
              </a>
              <a href="#" onClick={handleMenuClose}>
                <ShoppingCartIcon
                  size={32}
                  weight="bold"
                  className="text-white"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
