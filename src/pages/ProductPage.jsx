import { useParams } from "react-router-dom";
/* Helpers */
import { productos } from "@helpers/products";
import { formatearDinero } from "@helpers/helpers";

export const ProductPage = () => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === parseInt(id));

  const { image, name, price, description } = producto;

  return (
    <>
      <div className="w-[1200px] mx-auto flex justify-center gap-10 text-gray-800">
        <div className="w-1/2 h-[650px] rounded-xl shadow-xl mt-5 p-5 bg-white item_product">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        <div className="w-1/2 p-5 flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold uppercase">{name}</h1>
          <span className="text-2xl font-extrabold uppercase">
            Precio: <span className="text-xl">{formatearDinero(price)}</span>
          </span>

          <p>{description}</p>

          <button className="mt-5 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-500 ease-in-out">
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};
