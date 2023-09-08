import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Iconos */
import { BiPhone, BiSearch, BiMessageDetail } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaUser, FaShoppingCart } from "react-icons/fa";
/* Logo */
import logo from "../../assets/images/logo.png";

import { Shopping } from "../modals/Shopping";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onShow = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <header className="w-full">
        <div className="top-color">
          <div className="px-10 xl:w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 py-5 md:py-2 text-sm text_color">
            <div className="flex gap-5">
              <p className="flex items-center gap-1">
                <BiPhone /> +51 975 597 994
              </p>
              <p className="flex items-center gap-1">
                <BiPhone /> +51 974 354 421
              </p>
            </div>
            <div className="flex gap-5">
              <p className="flex items-center gap-1">
                <GrLocation /> La Vicotoria, Chiclayo
              </p>
            </div>
            <div className="flex gap-5">
              <p className="flex items-center gap-1">
                <BiMessageDetail /> prueba@prueba.com
              </p>
            </div>
          </div>
        </div>

        <nav
          className={`w-full py-5 md:py-3 ${
            scrolled &&
            "bg-white fixed top-0 shadow-sm z-10 transition-all ease-linear duration-500"
          }`}
        >
          <div className="px-10 w-full xl:w-[1200px] mx-auto flex flex-col gap-3 md:flex-row justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className={`w-24 p-2 ${scrolled && "hidden md:block"}`}
            >
              <img src={logo} alt="logo" />
            </Link>
            <div className="flex gap-4">
              <Link to="/" className="text_color">
                Inicio
              </Link>
              <Link to="/nosotros" className="text_color">
                Nosotros
              </Link>
              <Link to="/tienda" className="text_color">
                Tienda
              </Link>
            </div>
            <div className="flex items-center gap-5 text-xl">
              <div className="pt-2 relative mx-auto text-gray-700">
                <input
                  className="border border-gray-300 bg-white h-10 px-5 pr-0 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Buscar"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <BiSearch />
                </button>
              </div>
              <div className="pt-2 text_color">
                <FaUser />
              </div>
              <button onClick={onShow} className="pt-2 text_color relative">
                <FaShoppingCart />
                <span className="w-4 h-4 absolute left-3 -bottom-3 flex items-center justify-center bg-red-500 text-white rounded-full text-xs p-1">
                  1
                </span>
              </button>
            </div>
          </div>
        </nav>

        <Shopping showCart={showCart} onShow={onShow} />
      </header>
    </>
  );
};
