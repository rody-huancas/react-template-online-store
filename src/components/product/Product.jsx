/* Helpers */
import { Link } from "react-router-dom";
import { formatearDinero } from "@helpers/helpers";
/* Iconos */
import { IoMdEye } from "react-icons/io";

export const Product = ({ producto }) => {
  const { id, image, name, price } = producto;
  return (
    <>
      <div className="w-60 bg-white shadow-lg p-4 rounded-lg flex flex-col gap-4 relative overflow-hidden item_product">
        <img src={image} alt={name} className="rounded-lg w-full h-56" />
        <div className="flex flex-col ">
          <span className="font-medium text-center text-sm uppercase">
            {name}
          </span>
          <p className="text-center text-sm font-medium text-red-500">
            {formatearDinero(price)}
          </p>

          <button className="mt-5 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-500 ease-in-out">
            Agregar al carrito
          </button>
        </div>

        {/* Ver */}
        <Link
          to={`/producto/${id}`}
          className="absolute top-10 -right-10 bg-red-400 text-white p-3 rounded-l-md btn_view transition-all duration-500 ease-in-out"
        >
          <IoMdEye />
        </Link>
      </div>
    </>
  );
};
