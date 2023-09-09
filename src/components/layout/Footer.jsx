/* Iconos */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="w-full py-10">
        <div className="flex flex-col items-center gap-4 bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between lg:px-52">
          <div className="lg:w-[1200px] flex flex-col md:flex-row gap-5 items-center justify-between mx-auto">
            <strong className="text-xl text-white sm:text-xl">
              ¿Buscas más productos?
            </strong>

            <Link
              to="/tienda"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90 transition-colors duration-500"
              href="/"
            >
              <span className="text-sm font-medium">Ver más productos</span>

              <BsArrowRight />
            </Link>
          </div>
        </div>

        <div className="mt-5 lg:w-[1024px] mx-auto grid place-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>
            <div className="flex flex-col gap-3 my-3">
              <Link to={"/"}>Lorem, ipsum.</Link>
              <Link to={"/"}>Lorem, ipsum.</Link>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>
            <div className="flex flex-col gap-3 my-3">
              <Link to={"/"}>Lorem, ipsum.</Link>
              <Link to={"/"}>Lorem, ipsum.</Link>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>
            <div className="flex flex-col gap-3 my-3">
              <Link to={"/"}>Lorem, ipsum.</Link>
              <Link to={"/"}>Lorem, ipsum.</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center">
          Copyright &copy; {new Date().getFullYear()} - Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
};
