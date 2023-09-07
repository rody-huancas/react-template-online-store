/* Componentes */
import { Slider } from "../components";
import { Information } from "../components/home/Information";
/* Imagenes */
import envio from "../assets/images/home/envio.png";
import pago from "../assets/images/home/pago.png";
import producto from "../assets/images/home/producto.png";
import { Categories } from "../components/home/Categories";

export const Home = () => {
  return (
    <>
      {/* Slider */}
      <Slider />
      {/* Datos envios */}
      <div className="w-[1200px] mx-auto">
        <div className="flex justify-center items-center gap-5 mt-5">
          <Information
            img={envio}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Information
            img={pago}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Information
            img={producto}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        {/* Categorias */}
        <Categories />
      </div>
    </>
  );
};
