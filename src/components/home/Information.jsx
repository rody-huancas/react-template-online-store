export const Information = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={img} alt="icono" className="w-28" />
      <p className="text-center">{text}</p>
    </div>
  );
};
