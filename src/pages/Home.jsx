/* Componentes */
import { Slider, Categories, Information } from "@components";
/* Imagenes */
import envio from "@assets/images/home/envio.png";
import pago from "@assets/images/home/pago.png";
import producto from "@assets/images/home/producto.png";
import { useTienda } from "@hooks/useTienda";

export const Home = () => {
  const { hola } = useTienda();

  hola();

  return (
    <>
      <Slider />

      <div className="w-full xl:w-[1200px] mx-auto">
        <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3">
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
