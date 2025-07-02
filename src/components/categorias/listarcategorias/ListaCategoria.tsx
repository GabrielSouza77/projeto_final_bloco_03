import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategoria";
import { BeatLoader } from "react-spinners";

function ListarCategorias() {
  const [isLoading, setIsLoading] = useState(true);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await listar("/categorias", setCategorias);
  }

  useEffect(() => {
    setIsLoading(true);
    buscarCategorias().finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && (
        <BeatLoader
          color="#0D9488"
          margin={0}
          size={80}
          speedMultiplier={2}
          aria-label="Beat-loading"
          className="mx-auto my-28"
        />
      )}
      <div className="flex justify-center bg-slate-100 pt-4">
        <div className="container flex flex-col mx-4">
          {!isLoading && categorias.length === 0 && (
            <div className="text-3xl text-center my-8">
              Nenhum produto foi encontrado
            </div>
          )}

          <div className="w-full grid grid-cols-1 gap-x-2 gap-y-10 my-22 md:my-0 sm:gap-x-6 sm:gap-y-8 lg:gap-x-4 lg:gap-y-10 md:grid-cols-3">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;
