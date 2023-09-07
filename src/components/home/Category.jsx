export const Category = () => {
  return (
    <>
      <div className="h-56 rounded-lg overflow-hidden relative item_category">
        <img
          src="https://pillinperu.vtexassets.com/assets/vtex/assets-builder/pillinperu.pillin-store-peru/0.0.37/img/new-home/bodies-enteritos___9dc81345ce12836977b82a121e38e4ad.jpg"
          alt=""
          className="rounded-lg w-full h-full object-cover"
        />

        <div className="absolute bottom-5 left-5 flex flex-col gap-2">
          <p className="text-white font-bold">Lorem, ipsum.</p>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-b focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Categoría
          </button>
        </div>
      </div>
    </>
  );
};
