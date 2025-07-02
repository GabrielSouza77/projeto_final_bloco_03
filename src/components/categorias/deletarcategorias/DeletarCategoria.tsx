import { useEffect, useState } from "react";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { deletar, listar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      ToastAlerta("Categoria não encontrada!", "erro");
      console.error(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      ToastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      ToastAlerta("Erro ao apagar a categoria", "erro");
      console.error(error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-full max-w-md mx-auto px-4 pt-20 md:pt-6">
      <h1 className="text-3xl md:text-4xl text-center py-4">
        Deletar Categoria
      </h1>
      <p className="text-center font-semibold mb-4 text-base md:text-lg">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className=" bg-white flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl transition-transform hover:scale-105 hover:shadow-2xl duration-200">
        <header className="py-3 px-6 bg-green-500 text-white font-bold text-2xl flex items-center gap-2">
          Categoria
        </header>
        <p className="p-6 text-3xl text-green-900 font-semibold text-center flex-1 flex items-center justify-center leading-relaxed md:leading-loose">
          {categoria.nome}
        </p>
        <div className="flex divide-x divide-green-200">
          <button
            className="w-1/2 text-slate-100 bg-red-500 hover:bg-red-700 flex items-center justify-center py-3 font-medium rounded-bl-2xl transition-colors duration-150 text-base md:text-lg"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 text-slate-100 bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-3 font-medium rounded-br-2xl transition-colors duration-150 text-base md:text-lg"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
