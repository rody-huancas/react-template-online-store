import { useState } from "react";
/* Componentes */
import { Product } from "../components";
/* Iconos */
import { TiArrowSortedDown } from "react-icons/ti";

const filtros = [
  {
    nombre: "Color",
    subcategorias: ["Rojo", "Azul", "Verde"],
  },
  {
    nombre: "Genero",
    subcategorias: ["Hombre", "Mujer", "Niño"],
  },
  {
    nombre: "Talla",
    subcategorias: ["S", "M", "L"],
  },
  {
    nombre: "Temporada",
    subcategorias: ["Verano", "Invierno", "Otoño"],
  },
];

/* Productos de prueba */
const productos = [
  {
    id: 1,
    image:
      "https://pillinperu.vtexassets.com/arquivos/ids/232852-1600-auto?v=638049252494600000&width=1600&height=auto&aspect=true",
    name: "Producto 1",
    price: 10.99,
  },
  {
    id: 2,
    image:
      "https://oechsle.vteximg.com.br/arquivos/ids/12373630-1500-1500/imageUrl_1.jpg?v=638037285175700000",
    name: "Producto 2",
    price: 15.99,
  },
  {
    id: 3,
    image:
      "https://vans.com.pe/cdn/shop/products/VN0005UFBA2_ALT1.jpg?v=1680189098",
    name: "Producto 3",
    price: 8.49,
  },
  {
    id: 4,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg",
    name: "Producto 4",
    price: 22.99,
  },
  {
    id: 5,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/db866edc182a46878fd9af6301155bb7_9366/Zapatilla_AX2R_Naranja_HQ5817_01_standard.jpg",
    name: "Producto 5",
    price: 12.99,
  },
  {
    id: 6,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2f0e5f081bd47348de1af42011edbf8_9366/Pantalon_Cargo_Premium_Essentials_Nylon_Negro_IC5316_21_model.jpg",
    name: "Producto 6",
    price: 19.99,
  },
  {
    id: 7,
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/22970968-512-512/imageUrl_2.jpg",
    name: "Producto 7",
    price: 6.99,
  },
  {
    id: 8,
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/27228015-512-512/null.jpg",
    name: "Producto 8",
    price: 14.99,
  },
  {
    id: 9,
    image:
      "https://ideaprint.pe/2204-thickbox_default/polos-publicitarios-campa%C3%B1a.jpg",
    name: "Producto 9",
    price: 11.99,
  },
  {
    id: 10,
    image:
      "https://www.felmatex.com/wp-content/uploads/2021/08/1-Color-20-1800-x-2300.jpg",
    name: "Producto 10",
    price: 25.99,
  },
  {
    id: 11,
    image: "https://looch.com.pe/media/2022/12/Franja-2-374x374.webp",
    name: "Producto 11",
    price: 7.99,
  },
  {
    id: 12,
    image: "https://perucho.pe/wp-content/uploads/2022/04/19.png",
    name: "Producto 12",
    price: 9.99,
  },
];

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
      <section className="w-[1200px] mx-auto flex flex-col items-center gap-5">
        <h1 className="text_color uppercase font-extrabold text-2xl ">
          Productos
        </h1>
        <div className="w-full flex justify-center gap-5">
          <div className="w-1/3 h-2/3 bg-white shadow-lg p-5 rounded-lg text-gray-700">
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
                  <label htmlFor="">Precio</label>
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
          <div className="w-2/3 px-5">
            <div className="grid grid-cols-3 gap-5 place-items-center">
              {productos.map((producto) => (
                <Product
                  key={producto.id}
                  image={producto.image}
                  name={producto.name}
                  price={producto.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
