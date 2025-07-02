import homeImage from "../../assets/imgs/home.png";

function Home() {
  return (
    <>
      <div className="bg-[#ffffff] min-h-screen flex justify-center">
        <div className="container grid grid-cols-2 text-green-500">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Aqui você encontra os melhores produtos.</p>

            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
                Novo Produtos
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src={homeImage}
              alt="Imagem Página Home"
              className="w-2/3 py-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
