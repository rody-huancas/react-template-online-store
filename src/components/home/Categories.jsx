import { Category } from "./Category";

export const Categories = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-lg font-bold text-gray-700">
          Categorías
        </h2>

        {/* Categorias */}
        <div className="grid grid-cols-4 place-items-center gap-5 mt-5">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </>
  );
};
