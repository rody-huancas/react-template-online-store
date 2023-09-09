import { Link } from "react-router-dom";

export const LoginComponent = () => {
  return (
    <>
      <div className="w-full xl:w-[1200px] mx-auto flex flex-col md:flex-row justify-center gap-4 my-10 p-5 lg:p-0">
        <div className="w-full md:w-1/2">
          <h1 className="text-indigo-600 font-black text-5xl text-center md:text-left md:text-6xl">
            Inicia Sesión y Compra{" "}
            <span className="text-black">Nuestros Productos</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 mt-5 xl:mt-0 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          <form>
            <div className="my-5">
              <label
                htmlFor=""
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor=""
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Contraseña
              </label>
              <input
                type="password"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                placeholder="Ingrese su contraseña"
              />
            </div>

            <input
              type="submit"
              value="Iniciar Sesión"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 transition-colors hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link
              to="/registrar"
              className="block text-center my-5 text-gray-500"
            >
              ¿No tienes una cuenta? Regístrate
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
