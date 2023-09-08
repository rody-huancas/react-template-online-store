/* Helpers */
import { useState } from "react";
import { formatearDinero } from "../../helpers/helpers";
/* Iconos */
import {
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineDelete,
} from "react-icons/ai";

export const Shopping = ({ showCart, onShow }) => {
  const [cantidad, setCantidad] = useState(2);
  return (
    <>
      <div
        className={`w-96 h-screen z-50 transition-all duration-500 ease-in-out bg-white shadow-xl text-center fixed top-0 -right-96 ${
          showCart && "right-0"
        }`}
      >
        <div className="w-full h-full flex flex-col items-start gap-5 p-5">
          <button
            onClick={onShow}
            className="bg-red-600 block p-1 rounded-lg text-white"
          >
            <AiOutlineClose />
          </button>
          <div className="w-full flex flex-col items-center">
            <span className="w-full flex justify-center items-center gap-5 uppercase font-black border-b pb-2 border-gray-200">
              <AiOutlineShoppingCart />
              Carrito de Compras
            </span>
          </div>
          {/* productos */}
          <div className="w-full h-28 bg-white shadow-lg rounded-md py-2 px-5 flex items-center justify-between gap-3 overflow-hidden">
            <img
              src="https://pillinperu.vtexassets.com/arquivos/ids/232852-1600-auto?v=638049252494600000&width=1600&height=auto&aspect=true"
              alt=""
              className="w-24 rounded-md"
            />

            <div className="flex flex-col gap-1 items-start">
              <span className="text-sm font-bold capitalize">
                Short para niño
              </span>
              <p className="text-sm font-bold">
                Cantidad: <span className="font-normal">2</span>
              </p>
              <p className="text-sm font-bold">
                Total:{" "}
                <span className="font-normal">{formatearDinero(520)}</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-600 transition-colors duration-500 ease-in-out">
                <AiOutlineDelete />
              </button>
              <input
                type="number"
                className="px-2  py-1 rounded-lg w-12 border text-center placeholder:text-gray-700"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Pago */}
        <div className="absolute bottom-0 w-full">
          <div className="p-5 bg-indigo-100">
            <div className="w-full flex justify-between">
              <span className="font-black uppercase text-sm">Subtotal: </span>
              <span className="text-sm">{formatearDinero(520.0)}</span>
            </div>
            <div className="w-full flex justify-between mt-3">
              <span className="font-black uppercase text-lg">Total: </span>
              <span className="text-lg font-black">
                {formatearDinero(520.0)}
              </span>
            </div>
          </div>
          <button className="w-full py-5 bg-indigo-600 text-white uppercase font-black transition-colors duration-500 ease-in-out hover:bg-indigo-800">
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};
