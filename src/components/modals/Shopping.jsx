/* Iconos */
import { AiOutlineClose } from "react-icons/ai";

export const Shopping = ({ showCart }) => {
  return (
    <>
      <div
        className={`w-96 h-screen bg-white shadow-xl p-5 text-center absolute top-0 -right-96 ${
          showCart && "right-96"
        }`}
      >
        <button
          onClick={""}
          className="bg-indigo-600 block p-1 rounded-lg text-white"
        >
          <AiOutlineClose />
        </button>
        <div>
          <span>Carrito de Compras</span>
        </div>
      </div>
    </>
  );
};
