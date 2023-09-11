import { useState } from "react";
/* Componentes */
import { Product } from "@components";
/* Helpers */
import { productos, filtros } from "@helpers/products";
/* Iconos */
import { TiArrowSortedDown } from "react-icons/ti";

export const Store = () => {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState(null);

  const handleClick = (nombreFiltro) => {
    if (nombreFiltro === filtroSeleccionado) {
      setFiltroSeleccionado(null);
    } else {
      setFiltroSeleccionado(nombreFiltro);
    }
  };

  return (
    <>
      <section className="xl:w-[1200px] mx-auto flex flex-col items-center gap-5 p-5 lg:p-0">
        <h1 className="text_color uppercase font-extrabold text-2xl ">
          Productos
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-5">
          <div className="w-full md:w-1/3 h-2/3 bg-white shadow-lg p-5 rounded-lg text-gray-700 sm:sticky sm:top-32 md:top-24">
            <span className="uppercase font-bold">Filtros</span>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col mt-3">
                {filtros.map((filtro) => (
                  <div key={filtro.nombre}>
                    <button
                      className="w-full border-t border-gray-200 text-left flex items-center justify-between py-3"
                      onClick={() => handleClick(filtro.nombre)}
                    >
                      {filtro.nombre}
                      <TiArrowSortedDown />
                    </button>
                    <div
                      className={`${
                        filtroSeleccionado === filtro.nombre
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      } transition-all duration-500 ease-in-out overflow-hidden pl-10`}
                    >
                      {filtro.subcategorias.map((subcategoria) => (
                        <div key={subcategoria} className="pb-3">
                          <input type="checkbox" id={subcategoria} />{" "}
                          <label htmlFor={subcategoria}>{subcategoria}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-200 py-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="">Precio</label>
                    <span className="text-gray-900 font-medium">10</span>
                  </div>
                  <input className="w-full" type="range" />
                </div>

                <input
                  type="submit"
                  value="Filtrar"
                  className="bg-indigo-600 py-3 rounded-lg text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-700 transition-colors duration-300"
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-2/3 px-5 flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:place-items-center">
              {productos.map((producto) => (
                <Product key={producto.id} producto={producto} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
