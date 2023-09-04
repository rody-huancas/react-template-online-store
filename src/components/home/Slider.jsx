import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Slider = () => {
  const slides = [
    {
      url: "https://img.freepik.com/foto-gratis/tienda-ropa_329181-8892.jpg?w=1380&t=st=1693861629~exp=1693862229~hmac=f2c57be834f234a33632534b9885a6f9c6fd317bc52b2188486c975bffcf9ab4",
    },
    {
      url: "https://img.freepik.com/foto-gratis/ropa-brillante-ninos-cuelga-pantalla-tienda-ropa-bebes_627829-6471.jpg?w=1380&t=st=1693861565~exp=1693862165~hmac=31e12e6395b5f80227b62a35e209f331572e973fdedf76fd2d0a99c56bfb0253",
    },
    {
      url: "https://img.freepik.com/foto-gratis/concepto-maqueta-camisa-ropa-sencilla_23-2149448749.jpg?w=1380&t=st=1693861301~exp=1693861901~hmac=92d970b59e88e5c3ed1d02c49c85036191755fda02e8c60670f4387ee1483a4e",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <p className="py-3 text-center top-color text-gray-700 font-bold">
        HASTA 70% OFF - ENVIOS A TODO EL PERÚ
      </p>
      <div className=" h-[700px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="w-full flex justify-center items-center py-2 absolute bottom-0">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer text-white"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
