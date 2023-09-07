export const Category = () => {
  return (
    <>
      <div className="h-56 bg-red-600 rounded-lg overflow-hidden relative item_category">
        <img
          src="https://pillinperu.vtexassets.com/assets/vtex/assets-builder/pillinperu.pillin-store-peru/0.0.37/img/new-home/bodies-enteritos___9dc81345ce12836977b82a121e38e4ad.jpg"
          alt=""
          className="rounded-lg w-full h-full object-cover"
        />

        <div className="absolute bottom-5 left-5 flex flex-col gap-2">
          <p className="text-white font-bold">Lorem, ipsum.</p>
          <button className="bg-orange-600 text-white px-5 py-1.5 rounded-lg transition-colors hover:bg-orange-700">
            Categoría
          </button>
        </div>
      </div>
    </>
  );
};
