import { Link } from "react-router-dom";
import homeImage from "../../assets/imgs/home.png";

function Home() {
  return (
    <>
      <div className="bg-transparent flex justify-center">
        <div className="container grid grid-cols-2 text-green-500">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Aqui você encontra os melhores produtos.</p>

            <div className="flex justify-around gap-4">
              <Link
                to="/cadcategoria"
                className="rounded text-green-700 border-green-700 border-solid border-2 py-2 px-6 font-semibold shadow-md bg-white hover:bg-green-500 hover:text-white focus:bg-green-800 focus:text-white active:bg-green-900 active:text-white transition-colors duration-300 ease-in-out cursor-pointer"
                tabIndex={0}
              >
                Nova Categoria
              </Link>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeImage} alt="Imagem Página Home" className="w-2/3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
