import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: Readonly<CardCategoriaProps>) {
  return (
    <div className=" bg-white flex flex-col rounded-2xl overflow-hidden justify-between min-h-[180px] min-w-[320px] md:min-h-[200px] md:min-w-[380px] shadow-xl transition-transform hover:scale-105 hover:shadow-2xl duration-200">
      <header className="py-3 px-6 bg-green-500 text-white font-bold text-2xl flex items-center gap-2">
        Categoria
      </header>
      <p className="p-6 text-3xl text-green-900 font-semibold text-center flex-1 flex items-center justify-center">
        {categoria.nome}
      </p>
      <div className="flex divide-x divide-green-200">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-1/2 text-slate-100 bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-3 font-medium rounded-bl-2xl transition-colors duration-150"
        >
          Editar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-1/2 text-slate-100 bg-red-500 hover:bg-red-700 flex items-center justify-center py-3 font-medium rounded-br-2xl transition-colors duration-150"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
